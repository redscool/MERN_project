import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const userLogIn = async (request, response) => {
  const { email, password } = request.body;
  if (!email || !password)
    return response
      .status(400)
      .send({ success: false, message: "Fill your details" });
  const login = await User.findOne({ email: email });
  if (!login) {
    response
      .status(400)
      .send({ success: false, messsage: "user does not exist" });
    return;
  }
  const flag = await bcrypt.compare(password, login.password);
  const payload = {
    email: login.email,
    id: login._id,
  };
  const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "1d" });
  console.log(token);
  if (!flag)
    response
      .status(400)
      .send({ success: false, message: "Invalid credentials" });
  else
    response.status(200).send({
      success: true,
      message: "Login successfully",
      email: login.email,
      token: "Bearer " + token,
    });
};

export const userSignUp = async (request, response) => {
  const {
    name,
    email,
    password,
    mobile,
    address,
    city,
    state,
    country,
    company,
    occupation,
    experience,
  } = request.body;
  if (
    !name ||
    !email ||
    !password ||
    !mobile ||
    !address ||
    !city ||
    !state ||
    !country ||
    !company ||
    !occupation ||
    !experience
  )
    return response
      .status(422)
      .send({ success: false, message: "Fill all the details" });
  try {
    const user = await User.findOne({ email: email });
    if (user)
      return response
        .status(422)
        .send({ success: false, message: "User already exists" });
    const newUser = new User({
      name,
      email,
      password,
      mobile,
      address,
      city,
      state,
      country,
      company,
      occupation,
      experience,
    });
    await newUser.save();
    response.status(201).send({
      success: true,
      messsage: "Signed in successfully",
      user: newUser,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getInfo = async function (req, res) {
  console.log("get");
  try {
    let user = await User.findOne({
      email: req.body.email,
    });

    return res.status(201).send({
      success: true,
      message: "User info",
      user: user,
    });
  } catch (err) {
    return res.status(404).send({
      success: false,
      message: error,
    });
  }
};
