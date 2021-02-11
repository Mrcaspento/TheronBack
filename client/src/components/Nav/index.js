import React, {useState, useEffect} from 'react';
import './style.css'
import {Link} from 'react-router-dom';
import SignUp from '../Landing/SignUp';
import LandingContent from '../Landing';
import Home from '../../pages/home';

const Nav = () => {
    const [click, setClick] =useState(false);
    const [button, setButton ] = useState( true );
    const [tab, setTab] =useState("home"); //by default the page will route to home

//funtion to handle the closing of the nav bar for the mobile
const handleClick = () => {
setClick(!click)
}

const closeMobileMenu = () => {
    setClick(false)
}
const showMenuButton = () => {
    if(window.innerWidth <= 960) {
        setButton(false) //if the screen is less the  it shows the button
    }else{
        setButton(true);
    }
};
useEffect(() => {
    showMenuButton();
})
window.addEventListener('resize', showMenuButton) //adding this for mobile responsive  and demonstration for class 

return(
    <>
      <nav className="navbar mb-4">
                <div className="navbar-container">
                    <div to="/home" className="navbar-logo ">
                        TheronBack <i className=" fas fa-leaf" />
                    </div>
                    
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} /> {/*Clicks cycle between the mobile menu X and Hamburger menu */}
                    </div>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    
                    <li className='nav-item  mt-3'>
                        <Link to="/signup" className="nav-links" onClick={closeMobileMenu}>{tab === 'signup' &&
                        <SignUp />}<h4>SignUp</h4>
                    </Link>
                    </li>
                    <li className='nav-item  mt-3'>
                        <Link to="/home" className="nav-links" onClick={closeMobileMenu}>{tab === 'home' &&
                        <Home />}<h4>Home</h4>
                    </Link>
                    </li>

                    <li className='nav-item  mt-3'>
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>{tab === 'landing' &&
                        <LandingContent />}<h4>Logout</h4>
                    </Link>
                    </li>
                  
                </ul>
                 {button}   {/*connect this button as a Popper to create event or either    */}
            </nav>
    </>
)


}
export default Nav;