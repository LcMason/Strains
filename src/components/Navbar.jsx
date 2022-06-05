import {Link} from 'react-router-dom'

function Navbar() {
    


//img src vs href
    
    return (
    <nav>
         <div id="navbar" className="nav-wrapper">
         {/* <img src="https://c.tenor.com/YMbY9m9-Q6YAAAAC/amcs-amcs2020.gif" alt="THC Pills"></img> */}
            <a href="https://c.tenor.com/YMbY9m9-Q6YAAAAC/amcs-amcs2020.gif" class="brand-logo center">Logo</a>
            <ul className="left hide-on-med-and-down">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/form">Form</Link></li>
            <li><Link to="/about">About</Link></li>
            </ul>
        </div>
    </nav>
  )   
}
export default Navbar;