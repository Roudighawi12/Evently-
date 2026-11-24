import {Link} from 'react-router-dom';
import '../Styles/Navbar.css';
import logo from '../Assets/logo.png';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='logo'>
                <img src={logo} alt="Evently Logo" />
                <h2>Evently</h2>  </div>
            <div className="rightSide">
                
                <Link to='/'> Home </Link>
                <Link to='/Events'> Events </Link>
                <Link to='/MyBookings'> My Bookings </Link>
                <Link to='/Login'> Login </Link>
                <Link to='/Register'> Register </Link>
                <Link to='/Admin'> Admin </Link>
            </div>
        </div>
    )
}
export default Navbar;