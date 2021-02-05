import { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Forms.css';

export default class SignUp extends Component {
    render = () => {
        return (
            <div className="mt6 flex flex-column items-center justify-center">
                <h1 className="f1">Sign up</h1>
                <form className="mt5">
                    <label className="f3">Username</label>
                    <input type="text" className="w-100 f3 mt2 mb3 pv2" />

                    <label className="f3 ">Password</label>
                    <input type="text" className="w-100 f3 mt2 pv2" />

                    <Link to="/" className="db no-underline tc w-100 f4 fw6 tracked grow pointer white bg-green b--none mt4 pv3">Register</Link>
                    <Link to="/login" className="db no-underline tc w-100 f5 fw6 tracked grow pointer white bg-red b--none mt3 pv2">Back</Link>
                </form>
            </div>
        );
    }
}