import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import Jwt from "jsonwebtoken";
// Name, Email, Mobile Number, Address, City, State, Country, Company Name, Occupation, Years of Experience
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobile: {
    type: Number,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  experience: {
    type: Number,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  projects: [{ type: mongoose.Schema.Types.Object, ref: "project" }],
});

userSchema.pre("save", async function (next) {
  console.log("Hi there");
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});

const Users = mongoose.model("Users", userSchema);

export default Users;
