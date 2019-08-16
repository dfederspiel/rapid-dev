import React from 'react';
import FontAwesome from 'react-fontawesome';

export default class Loading extends React.Component {
    render() {
        return (
           <div className="loading">
               <FontAwesome name="spinner" spin/>
           </div>
        );
    }
}