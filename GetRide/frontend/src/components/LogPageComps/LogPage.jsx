import React from 'react'
import { Link } from 'react-router-dom';
import './LogPage.css';

const LogPage = ({logData}) => {
    return (
      <div className="log_page_wrap">
      <div className="log_page_info">
        <div>
        <h1>ЗАПОЧНИ ГО ТВОЕТО ПАТУВАЊЕ!</h1>
        <span>Секое споделено возење е чекор кон почиста планета и подобар свет за идните генерации!</span>
        </div>
        <div className="log_page_logo">
        <Link to='/'>
        Home Page
        </Link>
          <p>ourDomain.com</p>
        </div>
      </div>
      <div className="log_section">
      {/* <img className="log_rocket" src={rocket}/> */}
      {/* <Link to='/'><img className="mentor_logo_img" src={MentorLogo}/></Link> */}
      <Link to='/'>Home Page</Link>

      <div className="log_section_component">
      {logData}
      </div>
      </div>
    </div>
    )
  }
  
  export default LogPage