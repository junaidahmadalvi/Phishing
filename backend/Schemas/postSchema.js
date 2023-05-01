const mongoose = require("mongoose");
// const validator = require("validator");


 postSchema= new mongoose.Schema({
    user_Id:{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'user' ,
        required: true,

    },
    title:{
        type :String,
        required : true,
    },
    desc:{
        type :String,
        required: true

    },
    
    img:{
        type :String,
        // required : true
    },
    likes:[{
            user_Id :{
                type: mongoose.Schema.Types.ObjectId,
                ref : 'user' ,},
                likeType :{
                    type: String}    
        
            }] ,
    comments:[{
            user_Id :{
                type: mongoose.Schema.Types.ObjectId,
                ref : 'user' },
                msg :{
                    type: String}    
            
            }]

})

// <============create collection============>
const Post = new mongoose.model("post", postSchema);

module.exports=Post

