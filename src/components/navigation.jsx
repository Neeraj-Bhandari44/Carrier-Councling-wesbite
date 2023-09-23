import { auth } from "../firebaseconfig"
import Logout from "./Logut"
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const Navigation = (props) => {
  const navigate = useNavigate();
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    setSubmitButtonDisabled(true);
    auth.signOut();
    navigate("/");
  };
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='/'>
            Career Path
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
              <li>
                <a href='Signup' className='page-scroll'>
                  Signup
                </a>
              </li>
              <li> {props.loginstatus ? <a href="#page-top" onClick={handleSubmission} className='page-scroll'> Logout</a>: <a href='Login' className='page-scroll'> Login</a>}</li>

              <h3 className="text-center">{props.name ? `Welcome - ${props.name}` : "Login please"}</h3>
          </ul>
        </div>
      </div>
    </nav>
  )
}
