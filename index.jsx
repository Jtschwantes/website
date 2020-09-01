import React from 'react';
import ReactDom from 'react-dom';
import HomePage from 'pages/HomePage';

const HelloComponent = () => {
    return <h1>Hello World!</h1>
}

ReactDom.render(<HomePage />, document.getElementById('root'));