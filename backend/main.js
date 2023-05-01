
const express = require('express');
// const connection =require("./dbConnection");
const app = express();
const cors = require("cors");
// const Post = require("./Schemas/postSchema")
const {User} = require("./Schemas/userSchema")
var ObjectId= require("mongodb").ObjectId;
 const connection =require("./dbConnection");
//---------------Controllers-----------------------

const userController = require("./Controllers/userController");
const postController = require("./Controllers/postController");


   
require("./dbConnection");


const port= 7000;

app.listen(port,()=>console.log(`Request is listening on ${port}` ))



//----------------------------------------------------------------------------

//              User CRUD
//----------------------------------------------------------------------------


app.use(cors());
// app.get('/users', userController.getUser );0


app.get('/singalUser/:id', userController.getUserById)


//-----------Insert Data----------------------

app.use(express.json())
app.post('/addUser'  , userController.addUser)

app.post('/loginUser'  , userController.loginUser)








//-----------Update Data----------------------

// app.use(express.json())
app.put('/user/update/:id', userController.updateUser)

app.put('/updateConnects/:id', userController.updateConnects)


//----------Delete Records -----------------------

app.delete('/user/delete/:id', userController.deleteUser)




//====================================================

//----------< Authentification> and <Authorization>-------------------------

//     admin     632b3061c48a747227b4a41a


// user     632876fa137b95b9ac2df768

 app.get('/allUsers/:id', async(req,res,next)=>{
     try{
         const id=req.params.id;

             let getresult=  connection(); 
            getresult= await User.findOne({
             
              _id: ObjectId(id),
             
           })
        //  console.log(getresult);

           if (getresult==null) {
             res.send("User Not Authenticated")
             console.log("User Not Authenticated");

           } else {

             // res.send("User Authenticatted")
             console.log("User Authenticated");
             next()
           }
     }catch(e){console.log(e);}

    
 },
// //-------- <Authorization>-------------------
 async(req,res,next)=>{
     try{
        const id=req.params.id;

        // const role=req.params.role;
 
            //  let getresult=  connection(); 
            const getresult= await User.findOne({
               
              _id: ObjectId(id),
                //  role:"admin"
             
           })
        //  console.log(getresult);




           if (getresult==null) {
             res.send("User not Authoriazed")
             console.log("User Not Authoriazed");

           }
           else if (getresult.role==="admin") {
            console.log("User Authoriazed");
            next()

          }
           
           else {

             // res.send("User Authenticatted")
             res.send("User not Authoriazed")
             console.log("User Not Authoriazed");
           }
     }catch(e){console.log(e);}

    
 }, userController.getUser );












// //----------------------------------------------------------------------------

// //             post CRUD
// //----------------------------------------------------------------------------


//-----------------Get Data---------------

// app.get('/posts', postController.getPost )

app.get('/posts/:id',postController.getPostById)
// client.connect();

//-----------Insert Data----------------------


app.post('/addpost', postController.addPost  )

//-----------Update Data----------------------


app.put('/post/update/:id', postController.updatePost)

app.put('/post/updateLikes/:id', postController.updateLikes)

app.put('/post/updateComments/:id', postController.updateComments)


//----------Delete Records -----------------------

app.delete('/post/delete/:id', postController.deletePost )







//----------< Authentification> and <Authorization>-------------------------

//     admin     632b3061c48a747227b4a41a


// user     632876fa137b95b9ac2df768

app.get('/allPosts/:id', async(req,res,next)=>{
    try{
        const id=req.params.id;

            let getresult=  connection(); 
           getresult= await User.findOne({
            
             _id: ObjectId(id),
            
          })
       //  console.log(getresult);

          if (getresult==null) {
            res.send("User Not Authenticated")
            console.log("User Not Authenticated");

          } else {

            // res.send("User Authenticatted")
            console.log("User Authenticated");
            next()
          }
    }catch(e){console.log(e);}

   
},
// //-------- <Authorization>-------------------
async(req,res,next)=>{
    try{
       const id=req.params.id;

       // const role=req.params.role;

           //  let getresult=  connection(); 
           const getresult= await User.findOne({
              
             _id: ObjectId(id),
               //  role:"admin"
            
          })
       //  console.log(getresult);




          if (getresult==null) {
            res.send("User not Authoriazed")
            console.log("User Not Authoriazed");

          }
          else if (getresult.role==="admin") {
           console.log("User Authoriazed");
           next()

         }
          
          else {

            // res.send("User Authenticatted")
            res.send("User not Authoriazed")
            console.log("User Not Authoriazed");
          }
    }catch(e){console.log(e);}

   
} , postController.getPost );















//======================================EEEENNNNDDDD===========================================================







//  userController.getAllUser );










// -----------for validation---------------

// ,  async (req, res, next) => {

//   const required = [
//       "Name",
//       "Email",
//       "Phone",
//       "Address",
      
//   ]

//   const userErrors = {}

//   for (const key of required) {

//       const val = req.body[key]

//       if (!val) {
//           userErrors[key] = `${key} is required`
//       }
//   }

//   // if (!cust_id) {
//   //     errors["cust_id"] = "cust_id is required"
//   // }

//   // if (!product_id) {
//   //     errors["product_id"] = "product_id is required"
//   // }

//   // if (!orders_descrip) {
//   //     errors["orders_descrip"] = "orders_descrip is required"
//   // }

//   // if (!orders_totalprice) {
//   //     errors["orders_totalprice"] = "orders_totalprice is required"
//   // }

//   // if (!orders_reviews) {
//   //     errors["orders_reviews"] = "orders_reviews is required"
//   // }

//   console.log("*** User Errors ***\n", Object.keys(userErrors))

//   if (Object.keys(userErrors).length > 0) {
//       return res.status(400).json({
//           message: "Data validation failed",
//           errors: userErrors
//       })
//   }

//   next()

// } 
