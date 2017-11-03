import React from 'react';  
import { Route, IndexRoute } from 'react-router';  
import App from './components/App.jsx';
import BannerPage from './components/bannerPage';  


export default (  
	<Route path="/" component={App}>
		<Route path="/banners" component={BannerPage}></Route>
	</Route>
);

