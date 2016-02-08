import request from 'superagent';
import config from '../../../config';

class RepositoriesSearchAPI {
    constructor(query) {
        this.query = query;
        this.stars = null;
        this.language = null;
        this.sort = null;
        this.order = null;
        this.page = null;
        this.perPage = null;
    }

    withStars(min, max) {
        min = typeof min !== 'undefined' ? min : 0;
        if (typeof max === 'undefined') {
            this.stars = `>=${min}`;
        } else {
            this.stars = `${min}..${max}`;
        }
        return this;
    }

    withLanguage(language) {
        this.language = language;
        return this;
    }

    withSort(sort, order) {
        this.sort = sort;
        this.order = order;
        return this;
    }

    withPagination(page, perPage) {
        this.page = page;
        this.perPage = perPage;
        return this;
    }

    end() {
        return new Promise((resolve, reject) => {
            let requestInstance = request.get(`https://api.github.com/search/repositories`)
                .accept('application/json')
                .query({
                    'client_id': config.clientId,
                    'client_secret': config.clientSecret
                });

            let query = [];
            if (this.query) {
                query.push(this.query);
                query.push('in:name');
            }
            if (this.stars) {
                query.push(`stars:${this.stars}`);
            }
            if (this.language) {
                query.push(`language:${this.language}`);
            }
            if (query.length > 0) {
                requestInstance.query({
                    q: query.join(' ')
                });
            }
            if (this.sort) {
                requestInstance.query({
                    sort: this.sort
                });
            }
            if (this.order) {
                requestInstance.query({
                    order: this.order
                });
            }
            if (this.page) {
                requestInstance.query({
                    page: this.page
                });
            }
            if (this.perPage) {
                requestInstance.query({
                    'per_page': this.perPage
                });
            }

            requestInstance.end((error, res) => {
                if (error) reject(error);
                resolve(res.body);
            });
        });
    }
}

export default function repositories(query) {
    return new RepositoriesSearchAPI(query);
}