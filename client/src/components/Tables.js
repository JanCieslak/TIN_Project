import { Component, createRef } from 'react';
import Card from './Tables/Card';
import NewRecordInput from './Tables/NewRecordInput';
import { snakeToCamel, isDate } from '../util';
import TableRow from './Tables/TableRow';

export default class Tables extends Component {
    constructor(props) {
        super(props);

        this.detailedView = createRef();

        this.state = {
            currentCard: 0,
            cards: ['Person', 'User', 'Author', 'Game', 'OrderedGame', 'Order', 'Wishlist'],
            // array of arrays[tables] which contains columns that are displayed in the simple view
            simpleColumns: [[1, 2, 3], [1, 2], [1, 2], [1, 2], [1, 2, 3], [1, 2], [1, 2]], 
            fields: [], // array of fields that user might fill in order to add / TODO: update record
            recordStructure: [], // record structure e.g. ['game_id', 'title', 'price', 'author_id']
            tableRecords: [], // array of records e.g. [[0, 'League of Legends', 0, 0]]
        }
    }

    componentDidMount = () => {
        this.detailedView.current.checked = true;
        this.fetchRecords();
    }

    /// fetch all of the records from the selected card [database table]
    /// save based on view state [detailed/simple]
    fetchRecords = () => {
        fetch(`http://localhost:3000/${this.state.cards[this.state.currentCard]}`)
            .then(response => response.json())
            .then(records => {
                const structure = Object.keys(records[0]);
                this.setState({ recordStructure: structure });

                if (records.length > 0) {
                    const newRecords = [];

                    records.forEach(record => {
                        const newRecord = [];

                        for (const property in record) {
                            if (isDate(record[property])) {
                                newRecord.push(new Date(record[property]).toISOString().substring(0, 10));
                                continue;
                            }

                            newRecord.push(record[property]);
                        }

                        newRecords.push(newRecord);
                    });
                    this.setState({ tableRecords: newRecords });
                }
            });
    }   

    onCardClick = (event) => {
        const children = event.target.parentNode.children;
        for (let i = 0; i < children.length; i++) {
            if (children[i] === event.target) {
                this.setState({ currentCard: i }, () => {
                    this.fetchRecords();
                });
                break;
            }
        }
    }

    onFormChange = (index, value) => {
        const newFields = [...this.state.fields];
        newFields[index] = value;
        this.setState({ fields: newFields });
    }

    addRecord = () => {
        // TODO: validate
        // TODO: post new record

        // convert names from snake_case to camelCase
        const structure = this.state.recordStructure.map(name => snakeToCamel(name));

        // convert to object
        const requestObject = {}
        for (let i = 0; i < this.state.fields.length; i++) {
            requestObject[structure[i]] = this.state.fields[i];
        }

        fetch(`http://localhost:3000/${this.state.cards[this.state.currentCard]}`, { 
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestObject)
        });
        this.setState({ tableRecords: [...this.state.tableRecords, [...this.state.fields]],
                        fields: new Array(this.state.fields.length) });
    }

    updateRecord = (index, updatedRecord) => {

    }

    deleteRecord = (index) => {
        console.log(`delete record with index ${index}`);
        fetch(`http://localhost:3000/${this.state.cards[this.state.currentCard]}`, { 
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: this.state.tableRecords[index][0] })
        });

        this.state.tableRecords.splice(index, 1);
        this.setState({ tableRecords: this.state.tableRecords });
    }

    render = () => {
        return (
            <div className="center mt5 w-60-l w-70-m w-100-ns">

                {/* TABLES */}
                <h1>Tables</h1>
                <div>
                {
                    this.state.cards.map((card, index) => {
                        // TODO: Refactor as in NewRecordInput if possible
                        if (this.state.currentCard === index) {
                            return <Card key={index} name={card} onClick={this.onCardClick} selected={true} />
                        } else {
                            return <Card key={index} name={card} onClick={this.onCardClick} />
                        }
                    })
                }
                </div>

                {/* NEW RECORDS */}
                <h1 className="mt5">New record</h1>
                <div>
                    <form>
                        {
                            this.state.recordStructure.slice(1).map((colName, index) => {
                                return <NewRecordInput key={index} index={index + 1} name={colName} onChange={this.onFormChange} />
                            })
                        }

                        <div className="mt3">
                            <button type="reset" onClick={this.addRecord} className="ph4 pv2 br-pill b--transparent bg-green white tracked fw6 pointer grow">add</button>
                            <button type="reset" className="ph4 pv2 br-pill b--transparent bg-red white tracked fw6 ml3 pointer grow">clear</button>
                        </div>
                    </form>
                </div>

                {/* RECORDS */}
                <h1 className="mt5">Records</h1>
                <form>
                    <input onChange={this.fetchRecords} type="radio" name="view-type" value="simple" className="mv2" /> 
                    <label htmlFor="simple" className="ml2 tracked">Simple</label>

                    <br />

                    <input onChange={this.fetchRecords} ref={this.detailedView} type="radio" name="view-type" value="detailed" className="mt2 mb3" /> 
                    <label htmlFor="detailed" className="ml2 tracked fw6">Detailed</label>
                </form>

                {/* DatabaseTable */}
                <table>
                    <thead>
                        <tr>
                            <th className="ttu tracked ph3 pv2 bg-gray">{/* BLANK CELL */}</th>
                            { 
                                this.state.recordStructure.filter((record, index) => {
                                    return this.detailedView.current.checked ? true : (!this.detailedView.current.checked && 
                                        this.state.simpleColumns[this.state.currentCard].includes(index))
                                }).map((record, index) => {
                                    return <th key={index} className="ttu tracked ph3 pv2 bg-light-gray">{record}</th>
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.tableRecords.map((record, index) => {
                                const recordData = record.filter((record, index) => {
                                    return this.detailedView.current.checked ? true : (!this.detailedView.current.checked && 
                                        this.state.simpleColumns[this.state.currentCard].includes(index))
                                });
                                return <TableRow key={index} id={this.state.tableRecords[index][0]} index={index} record={recordData} deleteRecord={this.deleteRecord} detailedView={this.detailedView} />
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}