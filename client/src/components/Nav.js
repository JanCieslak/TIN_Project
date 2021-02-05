import { React } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.css';

const Nav = () => {
    return (
        <header className="w-100 flex justify-center ph3 pv3 pv4-ns ph4-m ph5-l">
            <nav className="w-50-l w-70-m w-100-ns f4 fw6 tracked flex justify-between">
                <div>
                    <Link to="/" className="link white mr4 pointer" href="/">Games</Link>
                    <Link to="/tables" className="link white pointer" href="/">Tables</Link>
                </div>
                <div>
                    <Link to="/login" className="link white pointer" href="/">Sign in / Sign up</Link>
                </div>
            </nav>
        </header>
    );
}

export default Nav;