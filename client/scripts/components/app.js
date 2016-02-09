import React from 'react';

import Search from './search';
import Results from './results';

import repositories from '../api/repositories';

export default React.createClass({
    displayName: 'App',

    getInitialState () {
        return {
            query: ''
        }
    },

    handleSubmit(query) {
        this.setState({ query });
    },

    render() {
        return (
            <div className="app">
                <h1>allegro.de</h1>
                <Search onSubmit={this.handleSubmit} />
                <Results query={this.state.query} />
            </div>
        );
    }
});
