import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from "./containers/AppContainer";
import HpActions from './data/HpActions';
import './index.css';

ReactDOM.render(<AppContainer />, document.getElementById('root'));

HpActions.addHpEvent(-20, "test", "Test");

window.addHpEvent = val => HpActions.addHpEvent(val, "from console", "no notes");
window.removeHpEvent = id => HpActions.deleteHpEvent(id);