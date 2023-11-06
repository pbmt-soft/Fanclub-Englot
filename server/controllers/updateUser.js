import Users from '../models/Users.js';

export async function updateUser(req, res) {
  try {
    const { userId } = req.user;

    if (userId) {
      const body = req.body;
      const updateResult = await Users.updateOne({ _id: userId }, body);

      if (updateResult.nModified > 0) {
        return res.status(200).json({ msg: "Record Updated...!" });
      } else {
        return res.status(404).json({ error: "No records were updated." });
      }
    } else {
      return res.status(401).json({ error: "User not found...!" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
