import React,{useEffect,useState} from 'react'
import { Navigation } from './navigation'
import { auth } from "../firebaseconfig";
import { useHref, useNavigate } from "react-router-dom";


const ActivityTest = (props) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
        
      } else setUserName("");
    });
  }, []);
  const handleClick = () =>{
    {userName? window.location.replace('https://test2.thecareertest.org/v2'):navigate("/login")}
  }
  return (
    <>
    <Navigation className="" name={props.name} loginstatus={props.loginstatus}/><br/><br/><br/><br/><br/>
    <div id="about" className='container'>
    <h2>What Is a Career Assessment?</h2>
    <div className='text-left h3'>
      <p>A career assessment is a way to learn about career options that may be a match for your skills, interests, and values. There are different types of assessments that can help you determine which types of careers may interest you</p>
      <p>Most assessment tools ask questions about what you like, what you don’t like, the type of work environment you’re comfortable in, and how your personality meshes with different jobs, and then suggest careers that are a match.
      Career aptitude tests won’t give you a definitive answer on what the best job for you is, but they will give you options to explore and can help you narrow down your career interests.
      With the TestColor test, a team of clinical psychologists, psychoanalysts, and mathematicians leads you through a two-part color selection process to determine your personality and aptitude.10 It only takes a few minutes to complete by first clicking the colors you like the best, then those you like the least. While the initial results are free and comprehensive, you can pay for a more in-depth analysis.
      </p>
    </div>
    <h2>How a Career Test Can Help</h2>
    <div className='text-left h3'>
      <p>
      When you're looking for your first job or considering switching careers, it’s much easier when you have some ideas about what you’d like to do. 
      There are a variety of free career tests and quizzes available that address interests, values, and skills, but it is not essential to find a test that captures all of the elements.
      Take a free 35-minute online personality assessment to identify and leverage your strengths in four different areas of your personality, including connections, creativity, thinking, and drive.
      Wingfinder test-takers immediately receive a free feedback report containing an analysis of their strengths, career advice, and coaching from Red Bull athletes who have the same strengths. 
      </p>
    </div>
    <h2>Career Path Interest Assessment</h2>
    <div className='text-left h3'>
      <p>
      CareerOneStop’s Interest Assessment is a quick and easy way to get a list of careers that might be a good fit for your interests.4 It will take about five minutes to answer 30 questions about what you like to do—and what you don’t like.
      </p> 
      <p>
    After you complete the assessment, you’ll get a list of careers that are a match, with information on salary, educational requirements, and job outlook. For the careers that interest you the most, you’ll be able to review more information about the job and how to get a career started.
   Once you’ve generated a list of potential career options, you can take a closer look at what each job entails to learn whether it would be right for you. Enter a job title in CareerOneStop’s Occupation Profile tool to get details on the occupation, including a job description, required experience, education or training, earnings potential, and job outlook.
      </p>
    </div>
    </div>
    <div className='bg-info'>
       <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-16 col-md-6">
            {" "}
            <img src="img/actTest.svg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text ">
              <h2>Activity Based Test</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>Enhanced Skill Test</h3>
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
        <button className='btn btn-primary btn-lg' onClick={handleClick} >Take Test</button>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default ActivityTest