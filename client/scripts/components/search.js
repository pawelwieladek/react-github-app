import React from 'react';
import ReactDOM from 'react-dom'
import { Input, Button } from 'react-bootstrap';

export default React.createClass({
    displayName: 'Search',

    propTypes: {
        onSubmit: React.PropTypes.func.isRequired
    },

    handleSearch(event) {
        event.preventDefault();
        let value = this.refs.input.getValue();
        this.props.onSubmit(value);
    },

    render() {
        let button = <Input type="submit" value="Search" />;

        return (
            <form action="" onSubmit={this.handleSearch}>
                <Input type="text" placeholder="Was suchen Sie?" ref="input" buttonAfter={button} />
            </form>
        );
    }
});
