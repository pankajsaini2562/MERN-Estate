import express from 'express'
import User from '../models/userModel.js'
import bcryptjs from 'bcryptjs';
const router = express.Router();
router.post( '/SignUp',async (req,res)=>{
  const { username , email , password} = req.body;
  const hashedPassword = bcryptjs.hashSync(password , 10)
  const newUser = new User({username , email, password:hashedPassword});
  try{
    await newUser.save();
    return res.status(200).send({message:"data is posted"})
  }
  catch(error){
    res.status(400).send(error.message)

  }
  

} );

export default router;