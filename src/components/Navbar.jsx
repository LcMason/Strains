import {NavLink} from 'react-router-dom'

function Navbar() {
    
    return (
    <nav>
         <div id="navbar" className="linkStyles">
            <ul className="list-unstyled">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/form">Form</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
            </ul>
            
         </div>
       

    </nav>
  )   
}
export default Navbar;