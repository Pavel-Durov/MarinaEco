process.env.NODE_ENV = 'test';

require('babel-register')();

require.extensions['.css'] = () => null;
require.extensions['.png'] = () => null;
require.extensions['.jpg'] = () => null;


const jsdom = require('jsdom');
let exposedProperties = ['window', 'navigator', 'document'];

const dom = new jsdom.JSDOM('');

global.document = dom.window.document;
global.window = document.defaultView;

Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

documentRef = document;  //eslint-disable-line no-undef
