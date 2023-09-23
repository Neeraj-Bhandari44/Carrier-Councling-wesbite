import { useState } from "react"
import { Navigation } from "./navigation"

const CareerOptions = (props) => {
  return (
    <>
    <Navigation name={props.name} loginstatus={props.loginstatus}/>
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Career Options</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-xs-6 col-md-3'>
                  {' '}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p><br/>
                  <label htmlFor={d.options}>See all Careers</label>
                <select className="form-control" id={d.options}>
                        <option value="">-Select-</option>
                        {d? d.options.map((type,k) => {
                            return (
                                <option value={type} key={k}>
                                    {type}
                                </option>
                            );
                        }): 'Loading...'}
                </select>    
                <br/><br/><br/><br/>
                </div>
                ))
             : 'Loading...'}
        </div>
      </div>
    </div>
    </>
  )
}

export default CareerOptions;
