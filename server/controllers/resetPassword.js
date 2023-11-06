import Users from '../models/Users.js';
import bcrypt from 'bcryptjs';

export async function resetPassword(req, res) {
  try {
    if (!req.app.locals.resetSession) {
      return res.status(401).send({ error: "Session expired!" });
    }

    const { username, password } = req.body;

    try {
      const user = await Users.findOne({ username });

      if (!user) {
        return res.status(404).send({ error: "Username not found" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      await Users.updateOne({ username: user.username }, { password: hashedPassword });

      req.app.locals.resetSession = false; // Reset session
      return res.status(201).send({ msg: "Record Updated...!" });
    } catch (error) {
      return res.status(500).send({ error: "Failed to update password" });
    }
  } catch (error) {
    return res.status(500).send({ error });
  }
}
