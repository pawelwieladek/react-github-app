import React from 'react';

import Search from './search';
import Results from './results';
import LangFilter from './lang-filter';

import repositories from '../api/repositories';

export default React.createClass({
    displayName: 'App',

    getInitialState () {
        return {
            query: '',
            language: null
        }
    },

    handleFilterChange(language) {
        this.setState({ language });
    },

    handleSubmit(query) {
        this.setState({ query });
    },

    render() {
        return (
            <div className="app">
                <h1>allegro.de</h1>
                <Search onSubmit={this.handleSubmit} />
                <LangFilter onChange={this.handleFilterChange} />
                <Results query={this.state.query} language={this.state.language} />
            </div>
        );
    }
});
