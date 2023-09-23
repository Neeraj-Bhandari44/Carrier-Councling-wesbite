import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseconfig";
import { Route } from "react-router-dom";
import FrontPage from './FrontPage';
import { useState } from "react";
import { Navigation } from "./navigation";




function Logout() {
  return (
    <div>
          <Navigation loginstatus="false"/>
    </div>
  )
}

export default Logout;
