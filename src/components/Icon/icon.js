import React from 'react';
import FontAwesome from 'react-fontawesome';
import Caret from './Caret/caret';

export default class Icon extends React.Component {
    render() {
        const { name, size, spin } = this.props;

        if(!name)
            return;

        return (
            <div className="icon">
                {
                    name !== "caret" &&
                    <FontAwesome name={name} size={size} spin={spin}/>
                }
                 {
                    name == "caret" &&
                    <Caret />
                }
            </div>
        );
    }
}