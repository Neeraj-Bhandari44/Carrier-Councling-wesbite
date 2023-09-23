import { useNavigate } from 'react-router-dom';

export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Our Services</h2>
          <p>
            Experience the best Career Counselling From us. Below are the Services we Provide
          </p>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
              <a href={d.link} className="card mask">               
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  {' '}
                  {/* <h2> {d.link}</h2> */}
                  <i className={d.icon}></i>
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
                // </a>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
