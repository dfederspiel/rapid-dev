import React, { Component } from 'react';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';

export default class ReactDatePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: moment(),
            focused: true
        };
    }

    onChange = date => this.setState({ date })

    render() {
        return (
            <SingleDatePicker
                onDateChange={this.onChange}
                date={this.state.date}
                focused={this.state.focused} 
                onFocusChange={({ focused }) => this.setState({ focused })} 
                id="test" 
            />
        );
    }
}