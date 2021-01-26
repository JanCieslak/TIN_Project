import { React } from "react";
import '../styles/Nav.css';

const Nav = () => {
    return (
        <header className="w-100 flex justify-center ph3 pv3 pv4-ns ph4-m ph5-l">
            <nav className="w-50-l w-70-m w-100-ns f4 fw6 tracked flex justify-between">
                <div>
                    <a className="link white mr4 pointer" href="/">Games</a>
                    <a className="link white pointer" href="/">Tables</a>
                </div>
                <div>
                    <a className="link white pointer" href="/">Sign in / Sign up</a>
                </div>
            </nav>
        </header>
    );
}

export default Nav;