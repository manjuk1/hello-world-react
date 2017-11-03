import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

import configureStore from './stores/configureStore';  
import { Provider } from 'react-redux';  
import { Router, browserHistory } from 'react-router';  
import routes from './routes';
import {loadCats} from './actions/catActions';

const store = configureStore();

store.dispatch(loadCats());

// render(  
//   <Provider store={store}>
//     <Router history={browserHistory} routes={routes} />
//   </Provider>,
//   document.getElementById('app')
// );


ReactDOM.render(
		<Provider store={store}>
			<Router history={browserHistory} routes={routes} />
		</Provider>,
		document.getElementById('root'));

//ReactDOM.render(<App />, document.getElementById('root'));