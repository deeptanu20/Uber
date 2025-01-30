const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

const userSchema=new mongoose.Schema({
    fullname:{
        firstname:{
           type:String,
           required:true,
           minlength:[3,'First name must be atleast 3 character long'] 
        },
        lastname:{
            type:String,
            minlength:[2,'Last name must be atleast 2 character long']
        }
    },
    email:{
        type:String,
        unique:true,
        required:true,
        minlength:[5,'Email must be atleast 5 characters long']
    },
    password:{
        type:String,
        required:true,
        select:false,
        minlength:[3,'Password must be atleast 3 characters long']
    },

    socketId:{
        type:String
    }

})

userSchema.methods.generateAuthToken =function(){
     const token=jwt.sign({
        _id:this._id},
       process.env.JWT_SECRET,
       {expiresIn: '24h' }
    );
    return token;
}

userSchema.methods.comparePassword=async function(password){
    return await bcrypt.compare(password,this.password);
}
userSchema.statics.hashPassword=async function(password){
    return await bcrypt.hash(password,10);
}


const userModel=mongoose.model('user',userSchema);

module.exports=userModel;