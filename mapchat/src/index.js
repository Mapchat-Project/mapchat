import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';



const startApp = () => {
	ReactDOM.render(<App />, document.getElementById('root'));
}

/**
this code below checks if cordova has been loaded. Adding the
deviceready eventlistener tells cordova that the app is ready
and loads the plugins (as I understand it)
**/
if(!window.cordova) {
	startApp()
} else {
	document.addEventListener('deviceready', startApp, false)
}