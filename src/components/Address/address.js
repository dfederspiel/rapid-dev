import React from 'react';
import { Column, Row } from "simple-flexbox";

var stateList = ['AK', 'AL', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VA', 'VT', 'WA', 'WI', 'WV', 'WY'];
var addressTypes = [{ name: 'Corporate Office', value: 1 }, { name: 'Branch Office', value: 2 }, { name: 'Home', value: 3 }, { name: 'Business', value: 4 }];

export default class Address extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: props.type,
            address1: props.address1,
            address2: props.address2,
            address3: props.address3,
            city: props.city,
            state: props.state,
            zip: props.zip,
            zip4: props.zip4,
            errorType: false,
            errorAddress1: false,
            errorCity: false,
            errorZip: false,
            errorState: false
        };
    }

    handleInputChange= (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.id;

        this.setState({
            [name]: value
        }, () => { this.validate(); });
    }

    validate = () => {
        this.setState({
            errorType: this.state.type.length === 0,
            errorAddress1: this.state.address1.length === 0,
            errorCity: this.state.city.length === 0,
            errorZip: this.state.zip.length === 0,
            errorState: this.state.state.length === 0
        });
    }

render(){
        return (
            <Column flexGrow={1} className="flex-column">
                <Row>
                    <Column>
                        <label htmlFor="type-select">Type*</label>
                        <select id="type-select" className={this.state.errorType ? "error" : ""} defaultValue={this.state.type} onChange={this.handleInputChange}>
                            {
                                addressTypes.map((type) => {
                                    return <option key={type.value} value={type.value}>{type.name}</option>;
                                })
                            }
                        </select>
                        {
                            this.state.errorType &&
                            <label><span className="error">*</span> Required Field</label>
                        }
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <label htmlFor="address1">Address 1*</label>
                        <input type="text" id="address1" value={this.state.address1} className={this.state.errorAddress1 ? "error" : ""} onChange={this.handleInputChange} />
                        {
                            this.state.errorAddress1 &&
                            <label><span className="error">*</span> Required Field</label>
                        }
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <label htmlFor="address2">Address 2</label>
                        <input type="text" id="address2" value={this.state.address2} onChange={this.handleInputChange}/>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <label htmlFor="address3">Address 3</label>
                        <input type="text" id="address3" value={this.state.address3} onChange={this.handleInputChange}/>
                    </Column>
                </Row>
                <Row wrap={true}>
                    <Column className="spaced-element">
                        <label htmlFor="city">City*</label>
                        <input type="text" id="city" value={this.state.city} className={this.state.errorCity ? "error" : ""} onChange={this.handleInputChange} />
                        {
                            this.state.errorCity &&
                            <label><span className="error">*</span> Required Field</label>
                        }
                    </Column>
                    <Column>
                        <label htmlFor="state">State*</label>
                        <select id="state" className={this.state.errorState ? "error" : ""} value={this.state.state} onChange={this.handleInputChange}>
                            {
                                stateList.map((state)=> {
                                    return <option key={state} value={state}>{state}</option>;
                                })
                            }
                        </select>
                        {
                            this.state.errorState &&
                            <label><span className="error">*</span> Required Field</label>
                        }
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Row>
                            <Column>
                                <label htmlFor="zip">Zip Code*</label>
                            </Column>
                        </Row>
                        <Row wrap={true}>
                            <Column className="spaced-element">
                                <input type="text" id="zip" value={this.state.zip} className={this.state.errorZip ? "error" : ""} onChange={this.handleInputChange} />
                                {
                                    this.state.errorZip &&
                                    <label><span className="error">*</span> Required Field</label>
                                }
                            </Column>
                            <Column>
                                <input type="text" id="zip4" value={this.state.zip4} onChange={this.handleInputChange}/>
                            </Column>
                        </Row>
                    </Column>
                </Row>
            </Column>
        );
    }
}