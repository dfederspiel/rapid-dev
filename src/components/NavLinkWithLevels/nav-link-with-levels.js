import React from 'react';
import FontAwesome from 'react-fontawesome';
import NavSecondLevel from '../NavSecondLevel/nav-second-level';
import Icon from '../Icon/icon';

export default class NavLinkWithLevels extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            active: false,
        }
    }

    componentWillMount() {
        document.addEventListener("mousedown", this.handleClick, false);
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClick, false);
    }

    handleClick = (e) => {
        if (this.node.contains(e.target))
            return;
        this.close();
    }

    toggle = () => {
        this.setState({ active: !this.state.active }, this.props.openSideNav);
    }

    close = () => {
        this.setState({ active: false });
    }

    render() {
        const { title, icon, links, showCaret } = this.props;
        const { active } = this.state;
        const { toggle } = this;

        if (!this.props.title)
            return null;

        return (
            <li className={`nav-link-with-levels ${active ? "active" : ""}`} ref={node => this.node = node}>
                <a className="link" href="javascript:void(0)" onClick={toggle}>
                    <div className="title">{title}</div>
                    {showCaret && <Icon name="caret" />}
                </a>
                {
                    icon &&
                    <a className="active-trigger" href="javascript:void(0)" onMouseEnter={toggle}  onMouseLeave={toggle}>
                        <Icon name={icon} size="lg"/>
                    </a>
                }
                {
                    links && <NavSecondLevel title={title} links={links} />
                }
            </li>
        );
    }
}