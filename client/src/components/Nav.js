import { React } from "react";
import '../styles/Nav.css';

const Nav = () => {
    return <nav>
        <div id="container">
            <div id="left">
                <button>Games</button>
                <button>Tables</button>
            </div>
            <div id="right">
                <button>Sign in / Sign up</button>
            </div>
        </div>
    </nav>
}

export default Nav;