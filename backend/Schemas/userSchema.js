const mongoose = require("mongoose");
// const validator = require("validator");
// const Joi = re quire("joi");

const userSchema = new mongoose.Schema({
    // name : {
    //     type : String,
    //     required : true,
    // },
    email :{
        type : String,
        required:true,
        unique : [true , " Email already present"],
    },
    pswd :{
        type : String,
        required:true,
    },
    // phone :{
    //     type : String, 
    //     // required:true,
        
    // },
    
    // gender :{
    //     type : String,
    //     // required : true
    // },
    // role :{
    //     type :String,
    //     default: "user",
    //     // enum:["user","admin"]
    // },
    // img :{
    //     type :String,
    // },
    // age:{
    //     type :Number,
    // },
    // field:{
    //     type :String,

    // },    
    // expr:{
    //     type :String,
    // },
    // qualfc:{
    //     type :String,
    // },
    // bio:{
    //     type :String,
    // },
    // connects:[
    //             {
    //                 type: mongoose.Schema.Types.ObjectId,
    //                 ref : 'user' 
    //             }
    //         ]

})








// <============create collection============>
const User = new mongoose.model("phishing",userSchema);


// const validate = (data) => {
//     const schema = Joi.object({
//         name: Joi.string().required().min(3).label("Name"),
//         email: Joi.string().email().required().label("Email address"),
//         pswd: Joi.string().password().required().min(6).label("Password"),
//         phone: Joi.string().required().label("Phone"),
//         gender: Joi.string().required().label("Gender"),

//     });
//     return schema.validate(data);
// };


module.exports= {User};