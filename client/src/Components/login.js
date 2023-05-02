// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import React, {  useState } from 'react'
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
const validEmail = new RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');

function Login() 
{
    const navigate= useNavigate();

        const [email, setEmail] = useState('');
        const [pswd, setPswd] = useState('');
        const [emailErr, setEmailErr] = useState(false);
        //  const [pswdError, setPswdError] = useState(false);
        const [error,setError]= useState(false);
    function authUser()
    {
            let data={email,pswd}
        console.log(data);
        
            if(!email||!pswd)
            {
            setError(true)
            return false
            }
            // const validate = () => {
            if (!validEmail.test(email)) {
                setEmailErr(true);
            }else{  
                setEmailErr(false);  
            }
            // if (!validPassword.test(pswd)) {
            //    setPswdError(true);
            // }else{  
            //   setPswdError(false);  
            // }
        //  };
        
            fetch("https://1a30-111-68-104-82.ngrok-free.app/loginUser", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*"
            },
            body:JSON.stringify(data)
            }).then((resp)=>{
            console.warn("resp",resp);
            console.warn("data",data);
            resp.json().then((result)=>{
                alert(result?.message)
                console.log("result",result)
                localStorage.setItem("token",result?.token)
                localStorage.setItem("id",result?.id)
            //  const id=result._id;
                
                if(result.message==="Login Successfully")
                {
                    // if(result.role==="user")
                    // {
                    //     navigate("/home")
                    // }

                    // if(result.role==="admin")
                    // {
                    //     navigate("/adminHome")
                    // }

                    navigate("/home")
                

                }
     
            })
            // navigate("../Components/login.js")
        
            })
    }
    
    return (
        <div style={{"margin": "7%"}}>
                <div className="card p-5 card1 container">
            
            <div className="row d-flex justify-content-center">
            
                <div className="col-md-10">
                    
                
            <div className="card">
                    <div className="row no-gutters">
                        <div className="col-md-4 first">
                            <div className="linkedin"><span className="no-gutters text-primary font-weight-bold">Linked</span><span className="in">in</span></div>
                        </div> 
                        <div className="col-md-6 second pl-4 pr-4">
                            <h4 className="welcome text-primary"  style={{"fontWeight": "700", "fontSize": "40px"}}>Welcome</h4>
                            <div className="form-group"  >
                                <input type="email number" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" className="form-control" />
                                {error && !email &&(<span className='error'>Required Email</span>)}
                                {emailErr && <span className='error'>Email is invalid</span>}

                                <br />

                                <input type="Password" name="pswd" value={pswd} onChange={(e)=>{setPswd(e.target.value)}} placeholder="Password" className="form-control"/>
                                {error && !pswd &&(<span className='error'>Required Password </span>)}
                            
                                {/* <div className="forgot"	><span>Forgot Password?</span></div> */}
                                
                            </div>
                            <br />
                            <div className="space">
                                <button type="button" className="btn btn-primary btn1" style={{"fontWeight": "600", "fontSize": "20px","borderRadius":"10px"}} onClick={authUser} >Login</button>
                                {/* <Link to="/signup">
                                <button type="button" className="btn btn-primary btn2"  style={{"float": "right","padding":"5px","marginTop": "3px"}}>Sign Up</button>
                                </Link>   */}
                            </div>
                            <br />
                        
                        </div>
                    
                    </div>
                
                
            </div>
            
            </div>
                
            
            </div>
            
            </div>
        </div>
      )
}


 export default Login










//  if(result.message==="Login Success")
//  {
//  navigate("./home")

//  }




// const Login = () => {
//     // const navigate= useNavigate();
//   return (
//     <div>
//       <div className="card p-5 card1 container">

// <div className="row d-flex justify-content-center">

//     <div className="col-md-10">
        
    
// <div className="card">
//     <div className="row no-gutters">
//         <div className="col-md-4 first">
//             <div className="linkedin"><span className="no-gutters text-primary font-weight-bold">Linked</span><span className="in">in</span></div>
//         </div> 
//         <div className="col-md-6 second pl-4 pr-4">
//             <h4 className="welcome text-primary">Welcome</h4>
//             <div className="form-group">
//                 <input type="email number" name="email number" placeholder="Email or Phone" className="form-control" />
//                 <input type="Password" name="Password" placeholder="Password" className="form-control"/>
//                 <div className="forgot"	><span>Forgot Password?</span></div>
                
//             </div>
//             <div className="space">
//                 <button type="button" className="btn btn-primary btn1">Login</button>
//                   <Link to="/signup">
//                 <button type="button" className="btn btn-primary btn2">Sign Up</button>
//                 </Link>  
//             </div>
//             {/* <div className="row">
//                 <div className="col-sm-4 under">
//                     <span>Copyright Policy</span>
//                     <p>User Agreement</p>
                    
//                 </div>
//                 <div className="col-sm-3 under">
//                     <span>Privacy Policy</span>
//                     <p>Cookie Policy</p>
//                 </div>
//                 <div className="col-sm-4 under">
//                     <span>Send Feedback</span>
//                     <p>Community Guidelines</p>
                    
//                 </div>
//                 <div className="col-md-1	">
//                     <p> </p>
                    
//                 </div>
//             </div> */}
            
//         </div>
       
//     </div>
    
    
// </div>

// </div>
    

// </div>

// </div>
//     </div>
//   )
// }

