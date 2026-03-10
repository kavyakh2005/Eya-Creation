const authModel = require("../models/auth.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function register(req, res) {
  try {
    const { fullName, email, password } = req.body;
    const isUserExist = await authModel.findOne({ email });
    if (isUserExist) {
      return res.status(400).json({ message: "User Already Exist" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const registerAdmin   = await authModel.create({
      fullName,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign({id: registerAdmin._id}, process.env.JWT_SECRET);

    res.cookie("token", token);

    res.status(200).json({
        message:"User Registered Successfully",
        success:true,
        data:{
            _id:registerAdmin._id,
            fullName:registerAdmin.fullName,
            email:registerAdmin.email,
            token:token,
        }
    })

    
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

async function login(req, res) {
  try {
    const {email ,password} = req.body;
    const user = await authModel.findOne({email});
    if(!user){
        return res.status(400).json({message:"User Not Found"})
    }
    const isPasswordMatched = await bcrypt.compare(password,user.password);
    if(!isPasswordMatched){
        return res.status(400).json({message:"Invalid Credentials"})
    } 
    
    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
    res.cookie("token", token);
    
    res.status(200).json({
        message:"User Logged In Successfully",
        success:true,
        data:{
            _id:user._id,
            fullName:user.fullName,
            email:user.email,
            token:token,
        }
    })
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = { register, login };
