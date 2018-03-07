import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './Calculator';
import registerServiceWorker from './registerServiceWorker';

var value = {
  addOne: 'addone',
  addTwo: 'addtwo',
  sum: 'sum'
}



ReactDOM.render(<Calculator addOne={value.addOne} addTwo={value.addTwo} sum={value.sum} />, document.getElementById('root'));
registerServiceWorker();
