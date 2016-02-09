import React from 'react';
import ReactDOM from 'react-dom'

export default React.createClass({
    displayName: 'Search',

    propTypes: {
        onSubmit: React.PropTypes.func.isRequired
    },

    handleSearch() {
        let value = ReactDOM.findDOMNode(this.refs.input).value;
        this.props.onSubmit(value);
    },

    render() {
        return (
            <div>
                <input type="text" placeholder="Was suchen Sie?" ref="input" />
                <button onClick={this.handleSearch}>Search</button>
            </div>
        );
    }
});
