import { Component } from 'react';
import { isNumeric, isDate } from '../../util';
import '../../styles/TableRow.css';

// TODO: Fix field values when switching between simple and detailed views in editingMode
export default class TableRow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editingMode: false,
        }
    }

    onUpdate = (event) => {
        const childNodes = event.target.parentNode.parentNode.childNodes;
        const requestData = []
        let startingPoint;

        // add id
        requestData.push(this.props.id);

        if (this.props.detailedView.current.checked) {
            startingPoint = 2;
        } else {
            startingPoint = 1;
        }

        // add other fields
        for (let i = startingPoint; i < childNodes.length; i++) {
            const value = childNodes[i].children[0].value;

            if (isNumeric(value)) {
                requestData.push(parseInt(value, 10));
            } else if (isDate(value)) {
                requestData.push(new Date(value));
            } else if (typeof value === 'string') {
                requestData.push(value);
            } else {
                // TODO: Something went wrong
            }
        }

        console.log(requestData);

        this.setState({ editingMode: false });
    }

    onEdit = (event) => {
        this.setState({ editingMode: true });
    }

    onDelete = (event) => {
        this.props.deleteRecord(this.props.index);
    }

    render = () => {
        const { index, record } = this.props;

        return (
            <tr key={index} className="striped--near-white tracked tc">
                <td>
                    {
                        this.state.editingMode ?
                            <button onClick={this.onUpdate} className="edit-btn bn white tracked br-pill fw6 ph2 pv1 mv2 mr2 pointer">update</button>
                            : <button onClick={this.onEdit} className="edit-btn bn white tracked br-pill fw6 ph2 pv1 mv2 mr2 pointer">edit</button>
                    }
                    |
                    <button onClick={this.onDelete} className="bn bg-red white tracked br-pill fw6 ph2 pv1 mv2 ml2 pointer">delete</button>
                </td>
                { 
                    record.map((col, index) => { 
                        return (
                            <td key={index} className="ph3 pv2">
                                {
                                    this.state.editingMode ? 
                                        this.props.detailedView.current.checked ?
                                            index > 0 ?
                                                <input type="text" defaultValue={col} className="tc" /> 
                                                : col
                                            : <input type="text" defaultValue={col} className="tc" /> 
                                        : col
                                }
                            </td>
                        );
                    })
                }
            </tr>
        );
    }
}