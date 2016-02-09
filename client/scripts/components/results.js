import React from 'react';

import repositories from '../api/repositories';
import ResultItem from './result-item';

export default React.createClass({
    displayName: 'Results',

    propTypes: {
        query: React.PropTypes.string,
        language: React.PropTypes.string
    },

    getInitialState() {
        return {
            results: []
        }
    },

    componentWillReceiveProps(nextProps) {
        repositories(nextProps.query)
            .withLanguage(nextProps.language)
            .withSort('stars', 'desc')
            .end()
            .then(responseBody => {
                let results = responseBody.items.map(item => {
                    return {
                        name: item.name,
                        owner: item.owner.login,
                        language: item.language,
                        avatarUrl: item.owner.avatar_url,
                        stars: item.stargazers_count
                    }
                });

                this.setState({ results })
            })
            .catch(errorBody => {
                console.log(errorBody);
            });
    },

    render() {
        let results = this.state.results.map(result => {
            let { name, owner } = result;

            return (
                <ResultItem {...result} key={`${owner} ${name}`} />
            );
        });

        return (
            <div>
                {results}
            </div>
        );
    }
});
