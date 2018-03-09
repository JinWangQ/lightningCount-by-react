import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LighteningCounterDisplay from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<div>
		<LighteningCounterDisplay />
	</div>,
	document.getElementById('root'));
registerServiceWorker();