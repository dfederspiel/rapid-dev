import React from 'react';
import AnimateHeight from 'react-animate-height';

export default class NavThirdLevel extends React.Component {
    constructor(props) {
        super(props);
        this.state = { height: 0 }
    }

    toggleSublinks = () => {
        this.setState({ height: this.state.height === 0 ? 'auto' : 0 });
    }

    render() {
        const { toggleSublinks } = this;
        const { height } = this.state;
        const { title, links } = this.props;

        return (
            <React.Fragment>
                <a href="javascript:void(0)" onClick={toggleSublinks}>{title}</a>
                <AnimateHeight duration={300} height={height}>
                    <ul className="nav-third-level">
                        {links.map((link, key) =>
                            <li key={key}>
                                <a href={link.href}>{link.title}</a>
                            </li>
                        )}
                    </ul>
                </AnimateHeight >
            </React.Fragment>
        )
    }
}