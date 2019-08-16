import React from 'react';
import Api from '../../services/Api';
import NavLink from '../NavLink/nav-link';
import Loading from '../Loading/loading';

export default class NavFastTrack extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fetching: true,
            error: false,
            links: [],
        };
    }

    componentDidMount() {
        Api.fetch("/api/fasttrack").then(this.setLinks)
            .catch(this.displayError);
    }

    setLinks = (links) => {
        this.setState({ links: links, fetching: false });
    }

    displayError = () => {
        this.setState({ error: true, fetching: false });
    }

    haslinks = () => {
        return this.state.links.length > 0;
    }

    renderLinks = () => {
        return (
            this.state.links.map((item, index) =>
                <NavLink {...item} icon={item.icon || "star"} key={index} />
            )
        )
    }

    render() {
        const { fetching, error } = this.state;
        const { renderLinks, haslinks } = this;

        return (
            <div className="fasttrack">
                <ul className="nav-base-level">
                    <label className="heading">FastTrack</label>
                    {
                        fetching && !error && !haslinks() &&
                        <Loading />
                    }
                    {
                        !fetching && !error && haslinks() &&
                        renderLinks()
                    }
                    {
                        !fetching && !error && !haslinks() &&
                        <div className="no-data-message">No FastTrack items found.</div>
                    }
                    {
                        !fetching && error && !haslinks() &&
                        <div className="error">There was an error retrieving FastTrack.</div>
                    }
                </ul>
            </div>
        )
    }
}