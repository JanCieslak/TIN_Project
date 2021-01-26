import { Component } from 'react';

export default class SignIn extends Component {

    render = () => {
        return (
            <div>
                <h1>Sign in</h1>
                <form>
                    <input type="text" />
                    <input type="text" />
                    <input type="button" />
                </form>
            </div>
        );
    }
}