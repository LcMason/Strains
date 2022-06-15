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
            <div>
                {/* <img className="image" src="https://c.tenor.com/YMbY9m9-Q6YAAAAC/amcs-amcs2020.gif" alt="Medicinal Healing"></img> */}
                {/* <img className="image" src="https://c.tenor.com/YMbY9m9-Q6YAAAAC/amcs-amcs2020.gif" alt='medicinal flower'></img> */}
               
                
            </div>
         </div>
       

    </nav>
  )   
}
export default Navbar;