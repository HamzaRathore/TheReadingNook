const User = require("../models/User");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const handleSignup=async(req,res)=>{

    try {

        const {name,email,password}=req.body;
        const exist=await User.findOne({email});
        if(exist){
           return  res.status(400).json({message:"User already exists",success:false})
        }

        const hashPassword= await bcrypt.hash(password,10);

        const user=new User({name,email,password:hashPassword});
        await user.save();
        res.json({message:"User Created Successfully",success:true});
        
    } catch (error) {
        console.log(error);

        return res.status(500).json({error:error.message,success:false});
        
    }

}

const handleLogin=async(req,res)=>{

   const {email,password}=req.body;

   try {

    const user= await User.findOne({email});
    if(!user)
    {
        return res.status(400).json({message:"User not found",success:false});
    }

    const PasswordExist = await bcrypt.compare(password,user.password);
    if(!PasswordExist)

    {

        return res.status(400).json({message:"Invalid Credentials",success:false});
    }

    const token= jwt.sign({id:user._id},
        process.env.JWT_SECRET,
        {expiresIn:'900d'});

    res.json(
        {
        role:user.role,
        token,
         message: "Login successful",
          success: true
        });

    
   } catch (error) {
    
    return res.status(500).json({error:error.message,success:false});
   }

}

module.exports={handleSignup,handleLogin}