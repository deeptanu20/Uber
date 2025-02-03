const blacklistTokenModel=require('../models/blacklistToken.model');
const userModel=require('../models/user.model');
const captainModel=require('../models/captain.model');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

module.exports.authUser=async(req,res,next)=>{

   const token=req.cookies.token || req.headers.authorization.split(' ')[ 1 ]; //get the token

   if(!token){
    return res.status(401).json({message:'Unauthorized'});
   }
    
   const isBlacklisted=await blacklistTokenModel.find({token:token});

   if(isBlacklisted){
      return res.status(401).json({message:'Unauthorized'});
   }
   try {
     const decoded=jwt.verify(token,process.env.JWT_SECRET); // verify the token get the id

     const user=await userModel.findById(decoded._id);

     if(!user){
        return res.status(201).json({message:'user not found'}); 
     }

     req.user=user;  //set the user

     return next();

    
   } catch (error) {
    return res.status(401).json({message:'Unauthorized'});
   }


}

module.exports.authCaptain=async(req,res,next)=>{

   const token=req.cookies.token || req.headers.authorization.split(' ')[ 1 ]; //get the token

   if(!token){
    return res.status(401).json({message:'Unauthorized'});
   }
    
   const isBlacklisted=await blacklistTokenModel.find({token:token});

   if(isBlacklisted){
      return res.status(401).json({message:'Unauthorized'});
   }

   try {

      const decoded=jwt.verify(token,process.env.JWT_SECRET); // verify the token get the id

     const captain=await captainModel.findById(decoded._id);

     if(!captain){
        return res.status(201).json({message:'captain not found'}); 
     }

     req.captain=captain;  //set the captain

     return next();
      
   } catch (error) {
      return res.status(401).json({message:'Unauthorized'});
      
   }
}

