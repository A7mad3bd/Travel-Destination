

import '../Navbar/Navbar.css';

import { Link } from 'react-router-dom';
import Header from '../header/Header';
function Navbar() {
    return (

        <>
             <nav className="App-header">
                <Link to='/'>  Home </Link>
            </nav>
             
            
        </>

    );
}

export default Navbar;

