import React from 'react'
import PropTypes from 'prop-types'
import {  Link } from "react-router-dom";

export default function Navbar(props) {
  return (
 <>
 <nav className={`navbar navbar-expand-lg navbar-${props.modes} bg-${props.modes}`}>
  <div className="container-fluid">
   
    <ul className="nav nav-pills">
  <li className="nav-item">
    <Link className="nav-link navbar-brand " aria-current="page" to="/">{props.title}</Link>
  </li>
  <li className="nav-item text-${props.modes==='light'?'dark':'light'}`">
   
    <Link className="nav-link  text-${props.modes==='light'?'dark':'light'}`" to='/'  relative="path">Home</Link>
  </li>
  <li>
    <Link className="nav-link" to="/about">{props.about}</Link>
  </li>
 
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 <div className="bg-primary rounded mx-2" onClick={()=>{props.tarrigarMode('primary')}} style={{height: '30px',width:'30px', cursor:'pointer'}}></div>
 <div className="bg-success rounded mx-2" onClick={()=>{props.tarrigarMode('success')}} style={{height: '30px',width:'30px', cursor:'pointer'}}></div>
 <div className="bg-info rounded mx-2" onClick={()=>{props.tarrigarMode('info')}} style={{height: '30px',width:'30px', cursor:'pointer'}}></div>
 
  <form className="d-flex mx-5">
      
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-success" type="submit">Search</button>
    </form>&nbsp;&nbsp;&nbsp;
    <div className={`form-check form-switch text-${props.modes==='light'?'dark':'light'}`}>
    <input className="form-check-input"   onClick={()=>{props.tarrigarMode(null)}} type="checkbox" id="flexSwitchCheckDefault"  />
    <label className="form-check-label"  htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
</div>
</ul>
 
  </div>
</nav>

 </>  

  )
}
 Navbar.propTypes  = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired

 }
 //Navbar.defaultProps = {
   // title:'Set title here',
  //  about: 'About text here'
// }
