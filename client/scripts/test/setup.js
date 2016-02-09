import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import jsdom from 'jsdom';

chai.use(sinonChai);

global.expect = chai.expect;
global.sinon = sinon;
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;

for (let key in window) {
    if (window.hasOwnProperty(key) && !global.hasOwnProperty(key)) {
        global[key] = window[key];
    }
}