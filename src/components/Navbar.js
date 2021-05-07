 
 import {Component} from 'react';
 import icCompanyLogo from '../img/ic_box.png';
 import '../css/Navbar.css';
 import { Redirect} from 'react-router-dom';
 
 import {
    Link,
    NavLink,
  } from 'react-router-dom';

class Navbar extends Component{

  constructor(props){
    super(props);
  }

  render(){

    return(

    <div>
      <div className="container">
         <Link to='/' className="offers_link_header navbar-brand" > <img className="navBarCompanyLogo" src={icCompanyLogo} /> </Link>
         <span className="productName">Cubix CRM 2021</span>
      </div>
      <hr></hr>
    </div>
      
    )
  }
}

export default Navbar;