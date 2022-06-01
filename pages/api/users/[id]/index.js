import User from "../../../../db/models/user";

export default async function getUserById(req, res) {
  try {
    const users = await User.findAll();
    res.status(200).json({ users });
  } catch (error) {
    res.status(400).json(error.message);
  }
}
