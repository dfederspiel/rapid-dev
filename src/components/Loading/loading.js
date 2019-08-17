import React from 'react';
import Icon from '../Icon/icon';

export default class Loading extends React.Component {
    render() {
        return (
           <div className="loading">
               <Icon name="spinner" spin={true}/>
           </div>
        );
    }
}