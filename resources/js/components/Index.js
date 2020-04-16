import React from 'react';
import ReactDom from 'react-dom';

function App() {
  return <h1>Sample page.</h1>;
}

if (document.getElementById('app')) {
  ReactDom.render(<App />, document.getElementById('app'));
}