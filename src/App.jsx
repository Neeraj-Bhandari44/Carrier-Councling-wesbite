import { useState, useEffect } from "react";
import { Features } from "./components/CareerOptions";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import JsonData from "./data/data.json";
import "./App.css";
import Signup from "./components/Signup";
import FrontPage from "./components/FrontPage";
import Login from "./components/Login";


import { auth } from "./firebaseconfig";
import Logout from "./components/Logut";
import Test360 from "./components/Test360";
import { Contact } from "./components/contact";
import ActivityTest from "./components/ActivityTest";
import { Certificates } from "./components/certificates";
import CareerOptions from "./components/CareerOptions";


const App = () => {
  const [username,setUsername] = useState("");
  const [login,setLogin] = useState(false);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user){
        setUsername(user.displayName);
        setLogin(true);
      } else {
        setUsername("");
        setLogin(false);
      };
    }
    )},[]);
  return (
    <>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<FrontPage name={username} loginstatus={login}/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/logout" element={<Logout/>}></Route>
        <Route path="/test360" element={<Test360 data={JsonData.Test360} name={username} loginstatus={login}/>}></Route>
        <Route path="/activitytest" element={<ActivityTest data={JsonData.ActivityTest} name={username} loginstatus={login}/>}></Route>
        <Route path="/contact" element={<Contact data={JsonData.Contact}/>}></Route>
        <Route path="/certificates" element={<Certificates data={JsonData.Certificates} name={username} loginstatus={login}/>}></Route>
        <Route path="/careeroptions" element={<CareerOptions data={JsonData.CareerOptions} name={username} loginstatus={login}/>}></Route>
        </Routes>
    </BrowserRouter> 
    </>
  );
};

export default App;
