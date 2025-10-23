import mongoose, {Schema} from "mongoose"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const userSchema = new Schema(
    {
     username : {
        type : String,
        required : true,
        unique : true,
        lowercase : true,
        trim : true,
        index : true //agr mongodb me kisi bhi field ko searchanble banna h to uska index true krdo thoda optimise jyada ker deta hai 
     },
     email : {
        type : String,
        required : true,
        unique : true,
        lowercase : true,
        trim : true, 
     },
    fullname : {
        type : String,
        required : true,
        trim : true, 
        index :true
     },
     avatar : {
        type : String, // cloudnary url
        required : true, 
     },
     coverImage : {
        type : String,
     },
     watchHistory : [
        {
            type : Schema.Types.ObjectId,
            ref : "Video"
        }
     ],
     password : {
        type : String,//password ko encrypt krke rakhna padta hai isliye string me rakhte h
        required : [true, 'Passwrod is required']
     },
     refreshTockens : {
        type : String
     }
},{timestamps : true})

userSchema.pre("save", async function(next) {
   if(!this.isModified("password")) return next();//agr passwrod chnage nahi hua h to vapis chale jayo 
   this.password = bcrypt.hash(this.password, 10)
   next()
   //10 represents round
})//har baar password encrypt nahi karna jab password bhejo tabhi bcrpt krna 

userSchema.methods.isPasswordCorrect = async function(password){
   return bcrypt.compare(password, this.password) 
   //aap jo password pass karte h uska compare karta hai encrpted password se    
}

userSchema.methods.generateAccessToken = function(){
   return jwt.sign(
      {
         //payload
         _id : this._id,
         email : this.email,
         username : this.username,
         fullname : this.fullname  
      },//.sign mathod token genarate karta h usme jojo chize aap store karana chahte h vo usme de do
      //this.something database se aa rahi hai 
      process.env.ACCESS_TOKEN_SECRET,
      {
         expiresIn: process.env.ACCESS_TOKEN_EXPIRY
      }
   )
}
userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
      {
         //payload
         _id : this._id,
      },//.sign mathod token genarate karta h usme jojo chize aap store karana chahte h vo usme de do
      //this.something database se aa rahi hai 
      process.env.REFRESH_TOKEN_SECRET,
      {
         expiresIn: process.env.REFRESH_TOKEN_EXPIRY
      }
   ) 
}
//both are jwt token 

export const User = mongoose.model("User", userSchema)
