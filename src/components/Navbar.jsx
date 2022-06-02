import {Link} from 'react-router-dom'

function Navbar() {
    

    return (
    <div id="navbar">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/form">Form</Link></li>
            <li><Link to="/search">Search</Link></li>
            
        </ul>
    </div>
  )

    
}
export default Navbar;