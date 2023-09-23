import { Image } from "./image";
import { Navigation } from "./navigation";

export const Certificates = (props) => {
  return (
    <>
    <Navigation name={props.name} loginstatus={props.loginstatus}/><br/><br/><br/>
     <div id='portfolio' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Certifications</h2>
          <p>
            Lists of Certifications 
          </p>
        </div>
        <div className='row'>
          <div className='portfolio-items'>
          <div className="col-lg">
            <img src="https://img.freepik.com/free-vector/certification-concept-illustration_114360-5171.jpg?w=1380&t=st=1673091498~exp=1673092098~hmac=3e568ab6da61cfec0e83bc6986f8485c07d61a0154a1999189a7042a9cbd9ad5" placeholder=""/>
          </div>
          {props.data
              ? props.data.map((d, i) => (
                <a href={d.link}>
                <div key={`${d.title}-${i}`} className='col-sm-6 col-md-4 col-lg-4'>
                  <Image title={d.title} smallImage={d.smallImage} />
                </div>
                </a>
              ))
              : 'Loading...'}
          </div>
        </div>
          
      </div>
    </div>
    </>
  )
}
