import Users from '../models/Users.js'
import bcrypt from 'bcryptjs';

export async function registerUsers(req,res){
    const {username,password,email,profileImg}=req.body;
    try {
        const existingUser = await Users.findOne({ $or: [{ username }, { email }] });
    
        if (existingUser) {
          return res.status(400).json({ error: "Please use a unique Username and Email." });
        }
    
        if (password) {
          const hashedPassword = await bcrypt.hash(password, 10);
    
          const user = new Users({
            username,
            password: hashedPassword,
            profileImg: profileImg || '',
            email,
          });
    
          const result = await user.save();
          return res.status(201).json({ msg: "User registered successfully!" });
        }
      } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

