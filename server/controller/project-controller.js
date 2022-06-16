import Project from "../models/project.js";
import User from "../models/user.js";
// (Project Name, Description, Category, Start, End Dates, Notes)
export const addproject = async (request, response) => {
  console.log(request.body);
  const { name, description, category, start, end, notes, email } =
    request.body;
  if (!name || !description || !category || !start || !end || !notes)
    return response
      .status(400)
      .send({ success: false, message: "Fill all details" });

  try {
    const user = await User.findOne({ email: email });
    if (!user)
      response
        .status(400)
        .send({ success: false, messsage: "please log in first" });
    const newProject = new Project({
      name,
      description,
      category,
      start,
      end,
      notes,
    });
    await newProject.save();
    await User.updateOne(
      {
        email: email,
      },
      {
        $push: { projects: newProject },
      }
    );
    response
      .status(201)
      .send({ success: true, messsage: "Project added successfully" });
  } catch (error) {
    console.log(error);
  }
};

export const getprojects = async (request, response) => {
  const { email } = request.body;
  try {
    const user = await User.findOne({ email: email });
    if (!user)
      return response
        .status(422)
        .send({ success: false, message: "email wrong" });
    response.status(201).send({ success: true, projects: user.projects });
  } catch (error) {
    console.log(error);
  }
};
