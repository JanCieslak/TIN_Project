import { Component } from 'react';

export default class NewRecordInput extends Component {
    onFormChange = (event) => {
        this.props.onChange(this.props.index, event.target.value);
    }

    render = () => {
        return (
            <div className="w-100">
            <h2 className="w-20 dib fw1">{this.props.name}</h2>
            <input type="text" onChange={this.onFormChange} className="w-20 f4" />
            </div>
        );
    }
}