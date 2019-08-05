//https://reactstrap.github.io/components/button-dropdown/

import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class DropDownButton extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>
                    {this.props.buttonTitle}
                </DropdownToggle>
                <DropdownMenu>
                    {
                        this.props.items.map(function (item) {
                            return <DropdownItem key={item.title} tag="a" href={item.url}>{item.title}</DropdownItem>;
                        })
                    }
                </DropdownMenu>
            </ButtonDropdown>
        );
    }
}

