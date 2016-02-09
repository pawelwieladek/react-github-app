import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import App from '../../components/app';

describe('App', function() {
    before('render component', function() {
        this.app = TestUtils.renderIntoDocument(<App />);
    });

    it('h1 should exist', function() {
        let headerComponent = TestUtils.findRenderedDOMComponentWithTag(this.app, 'h1');
        let headerNode = ReactDOM.findDOMNode(headerComponent);
        expect(headerNode).to.exist;
    });
});
