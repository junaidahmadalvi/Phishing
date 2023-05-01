
const Post = require("../Schemas/PostSchema")
var ObjectId= require("mongodb").ObjectId;
const connection =require("../dbConnection");


module.exports = {
    getPost: async(req,res)=>{
        try{
            let data=  connection(); 
            data= await Post.find()
           res.send(data)
        }
        catch(e)
        {
            console.log(e);
            res.status(400).send({  "message": "Server Error", "Error": e }) 

        }
    },
  
    
    getPostById:  async(req,res)=>{
        try{
            const id = req.params.id;
            console.log(id);
            let getIndividualResult=connection();
             getIndividualResult = await Post.find({"user_Id":id})
            res.status(201).send(getIndividualResult)
    
        }catch(e){res.send(e);}
    },


     addPost: async (req, res) => {
        try {
            const { title, desc } = req.body

            console.log(req.body);

            if (title && desc) 
            {
                const user = new Post(req.body);
    
            const result = await user.save()
            res.send({ "status": "success", "message": "Post Added Successfully", })    
            }
            else{
                res.send({ "status": "failed", "message": "All fields are required" })
                 console.log("All fields are required");
            }

                        
            
        } catch (e) { res.status(400).send(e) }
    },

    updatePost:  async(req,res)=>{
        try{
            const _id = req.params.id;
            console.log(_id);
            let newData = req.body 
            const updatedData = await Post.findByIdAndUpdate(_id , req.body,{
                new : true
            })
            res.status(201).send(updatedData)
    
        }catch(e){res.status(404).send(e);}
    },


    updateLikes:  async(req,res)=>{
        try{
            const _id = req.params.id;
            console.log(_id);
            let {user_Id,likeType} = req.body
            const updatedData=connection();
             updatedData = await Post.findOneAndUpdate(
                { _id: _id }, 
                {$push: {likes: {user_Id: user_Id, likeType: likeType}}})

           
                 res.send({ "status": "success", "message": "LIke Added SuccessFully", })    
             
            // res.status(201).send("LIke Added SuccessFully")
    
        }catch(e){res.status(404).send(e);}
    },

    
    updateComments:  async(req,res)=>{
        try{
            const _id = req.params.id;
            console.log(_id);
            let {user_Id,msg} = req.body
            const updatedData=connection();
             updatedData = await Post.findOneAndUpdate(
                { _id: _id }, 
                {$push: {comments: {user_Id: user_Id, msg: msg}}},
                {
                    new : true
                })

           
                 res.send({ "status": "success", "message": "Comment Added SuccessFully", })    
             
            // res.status(201).send("LIke Added SuccessFully")
    
        }catch(e){res.status(404).send(e);}
    },





    deletePost:   async(req,res)=>{
        try{
            const _id = req.params.id;
            const deletedData = await Post.findByIdAndDelete(_id)
            res.status(201).send(deletedData)
    
        }catch(e){res.status(404).send(e);}
    },



  };
  


