// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Navigbar from './Components/navbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import SignUp from './Components/signup';
import Login from './Components/login';
import Home from "./Components/home";
import Profile from './Components/profile';
import AdminHome from './Components/admin/adminHome';
import Post from './Components/getPosts';
import AllPosts from './Components/admin/allPosts';
import AllUsers from './Components/admin/allUsers';
function App() {
  const user = localStorage.getItem("token");
  console.log(user, "User Token");

  // if (user.token==null) {
  //   window.location.reload();

  // }
  return (
   
    
    <Router>
       <div className="App">
    {/* <Link to="/login">Login</Link>
    <Link to="/signup">SignUp</Link> */}
    {/* <Navigbar/> */}
    <Routes>
    {user && <Route path="/home" exact element={<Home />} />}
    <Route exact path="/signup" element={<SignUp/>}/>
    <Route exact path="/" element={<Login/>}/>
    <Route exact path="/profile/:id" element={<Profile/>}/>
    { user && <Route path="/adminHome" exact element={<AdminHome/>}/>}
    <Route exact path="/post/:id" element={<Post/>}/>
    <Route exact path="/allPosts/:id" element={<AllPosts/>}/>
    <Route exact path="/allUsers/:id" element={<AllUsers/>}/>

    </Routes>
    </div>
    </Router>






    
    
  );
}

export default App;
