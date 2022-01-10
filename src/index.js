import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
	<React.StrictMode>
		<App />
		<footer style={{ position: 'absolute', top: '0', left: '0', margin: '0 0 20px 0' }}>
			Made by{' '}
			<a
				href="https://www.linkedin.com/in/amirvelasquez1/"
				target="_blank"
				rel="noreferrer"
				style={{ color: 'greenyellow' }}
			>
				Amir Velasquez
			</a>{' '}
			for the MLH Build event
		</footer>
	</React.StrictMode>,
	document.getElementById('root')
);
