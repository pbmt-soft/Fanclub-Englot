import Users from '../models/Users.js';
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";
import ENV from '../config.js';

export async function loginUsers(req,res){
    const {username,password}=req.body;
    try {
       Users.findOne({username}).then(
        user=>{
            bcrypt.compare(password, user.password).then(
                passwordCheck=>{
                    if(!passwordCheck) return res.status(400).send({error: "Don t have Password!"});

                   const token= jwt.sign({
                        userId:user._id,
                        usename:user.username,
                    },ENV.JWT_SECRET,{expiresIn:'24h'});
                    return res.status(200).send({
                        msg:"Login successful...!",
                        username:user.username,
                        token
                    });
                }
            )
            .catch(error=>{
                return res.status(400).send({error: "Password does not match!"});
               });
        }
       )
       .catch(error=>{
        return res.status(404).send({error: "Username not found!"});
       });
        
    } catch (error) {
        return res.status(500).send({error});

    }
}