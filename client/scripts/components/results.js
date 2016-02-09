import React from 'react';

import repositories from '../api/repositories';

export default React.createClass({
    displayName: 'Results',

    propTypes: {
        query: React.PropTypes.string
    },

    getInitialState() {
        return {
            results: []
        }
    },

    componentWillReceiveProps(nextProps) {
        repositories(nextProps.query).end()
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
            let { name, owner, language, avatarUrl, stars } = result;

            return (
                <li>
                    <div>{name}</div>
                    <div>{owner}</div>
                    <div>{language}</div>
                    <div>{avatarUrl}</div>
                    <div>{stars}</div>
                </li>
            );
        });

        return (
            <ul>
                {results}
            </ul>
        );
    }
});
