import { Component } from "react";
import Card from './Tables/Card';
import '../styles/Tables.css';

export default class Tables extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: [
                'Person', 'User', 'Author', 'Game', 'OrderedGame', 'Game', 'Wishlist'
            ]
        }
    }

    render() {
        return <div id="main-container">
            <div id="top-container" className="container">
                <h2>Tables</h2>
                <div id="cards-container">
                    {
                       this.state.cards.map(card => {
                            return <Card name={card}/>;
                        })
                    }
                </div>
            </div>

            <div id="mid-container" className="container">
                <h2>New record</h2>
            </div>

            <div id="bottom-container" className="container">
                <h2>Table</h2>
            </div>
        </div>
    }
}