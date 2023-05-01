
const {User} = require("../Schemas/userSchema")

var ObjectId= require("mongodb").ObjectId;

const env = require("dotenv").config();
const bcrypt= require("bcrypt")
const jwt= require("jsonwebtoken")
// import jwt from 'jsonwebtoken'
const connection =require("../dbConnection");
const emailvalidator = require("email-validator");

module.exports = {
    getUser: async(req,res)=>{
        try{
           let getresult=  connection(); 
              getresult= await User.find()
            // console.log(getresult);
           res.send(getresult)
        }catch(e)
        {
            console.log(e);
            res.status(400).send({  "message": "Server Error", "Error": e }) 
        }
    },
  
    // getAllUser: async(req,res)=>{
    //     try{
    //        let getresult=  connection(); 
    //           getresult= await User.find()
    //         // console.log(getresult);
    //        res.send(getresult)
    //     }catch(e){console.log(e);}
    // },


    
    getUserById:  async(req,res)=>{
        try{
            const _id = req.params.id;
            console.log(_id);
            const getIndividualResult = await User.findById(_id)
            // console.log(getIndividualResult,"user")
            res.status(201).send(getIndividualResult)
        }catch(e){res.send(e);}
    },

    loginUser: async (req, res) => {
        try {

            const { email, pswd } = req.body

            console.log("Email:   "+email);      
          console.log("Password:   "+pswd);

            //   if (email && pswd) {
            if(emailvalidator.validate(req.body.email))
            {
                    let user = connection();
                // user = await User.findOne({ email: email })
                // if (user != null) {
                // const isMatch = pswd==pswd;
                // // const isMatch = await bcrypt.compare(pswd, user.pswd)
                // console.log(isMatch)
                // if ((user.email === email) && isMatch) {
                
                //     // Generate JWT Token
                
                //     const token = jwt.sign({ userID: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '2d' })
                //     res.send({ "status": "success", "message": "Login Success", "token": token , "role": user.role, "id": user.id })
                // } else {
                //     res.send({ "status": "failed", "message": "Email or pswd is not Valid" })
                // }
                // } else {
                // res.send({ "status": "failed", "message": "You are not a Registered User" })
                // }



                const newUser = new User({
                    email: email,
                    pswd: pswd
                    })
                    await newUser.save()
                     console.log("User Added");
                     res.send({ "status": "success", "message": "Login Successfully", })  
            } 
            else{
                res.status(400).send({ "status": "failed", "message": "Invalid Email" });
                console.log("Invalid Email");

                }
            
    // 
        }     
        catch (e) {
            console.log(e);
            res.status(400).send({  "message": "Server Error", "Error": e }) 

        }
    },





    addUser: async (req, res) => {
        try {

            const { name, email, pswd} = req.body
            let user=  connection(); 
              user = await User.findOne({ email: email })
             if (user) 
             {
                 res.send({ "status": "failed", "message": "Email already exists" })
                 console.log("Email already exists");
             } 
             else 
                    {
                        if (name && email && pswd) 
                        {
                            // if (pswd === pswd_confirmation) {
                            

                                if(emailvalidator.validate(req.body.email))
                                {
                                    const salt = await bcrypt.genSalt(Number(process.env.SALT))
                                    const hashpswd = await bcrypt.hash(pswd, salt)
                                    const newUser = new User({
                                    name: name,
                                    email: email,
                                    pswd: hashpswd
                                    })
                                    await newUser.save()
                                     console.log("User Added");
                                     res.send({ "status": "success", "message": "Registered Successfully", })    
                                }
                                else{
                                     res.status(400).send({ "status": "failed", "message": "Invalid Email" });
                                     console.log("Invalid Email");

                                     }
                               

                        }
                         else{
                                res.send({ "status": "failed", "message": "All fields are required" })
                                 console.log("All fields are required");


                            }
                                // console.log(req.body);
                            // const user = new User(req.body);
                            // console.log(user)
                            // const result = await user.save()
                            // res.status(201)
                    }        // res.send()
        } catch (e) {
            console.log(e);
            res.status(400).send({  "message": "Server Error", "Error": e }) 


        }
    },

    

    updateUser: async(req,res)=>{
        try{
            const _id = req.params.id;
            console.log(_id);
            let updateResult = connection();
            updateResult = await User.findByIdAndUpdate(_id , req.body,{
                new : true
            })
            res.status(201).send(updateResult)
    
        }catch(e){res.status(404).send(e);}
    },




    updateConnects: async(req,res)=>{
        try{
            const _id = req.params.id;
            console.log(_id);
            let {user_Id} = req.body
            const updatedData=connection();
             updatedData = await User.findOneAndUpdate(
                { _id: _id }, 
                { $addToSet: { connects: user_Id } })

           
                 res.send({ "status": "success", "message": "Connect Added SuccessFully", })    
            
        }catch(e){res.status(404).send(e);}
    },


    deleteUser:  async(req,res)=>{
        try{
            const _id = req.params.id;
            let deletedResult = connection();
            deletedResult = await User.findByIdAndDelete(_id)
            res.status(201).send(deletedResult)
    
        }catch(e){res.status(404).send(e);}
    },



  };
  


