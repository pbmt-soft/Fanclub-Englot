import Users from '../models/Users.js';

export async function getUser(req, res) {
  const { username } = req.params;

  try {
    if (!username) {
      throw new Error("Invalid Username");
    }

    const user = await Users.findOne({ username });

    if (!user) {
      throw new Error("User not found");
    }

    // Omit the password from the user object
    const { password, ...rest } = user.toObject();

    return res.status(200).json(rest);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
}
