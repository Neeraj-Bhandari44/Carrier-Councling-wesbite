import React from 'react'
import { Navigation } from './navigation' 



const Test360 = (props) => {
  return (
    <>
    <Navigation className="" name={props.name} loginstatus={props.loginstatus}/><br/><br/><br/><br/><br/>
    {/* <a href='/Logout' className='text-right'><button className='btn btn-danger btn-large'>Logout</button></a> */}
    <div className='bg-info'>
       <div id="about">
      <div className="container">
        <div className="row ">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text ">
              <h2>Free 360 Skill Test</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>Know Your Career</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='text-right'>       
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSciG9cuIP8M3_69TCtCPJj4mrZBBij8uPzYtlUg68XPs0YtUQ/viewform?vc=0&c=0&w=1&flr=0"><button className='btn btn-primary btn-lg'>Take Test</button></a>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Test360;