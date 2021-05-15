import {Link, Route, Switch} from 'react-router-dom';
import DetPosts from '../decent/DetPosts';
import React from 'react';

function Post({item, url}) {
	// let  = proms;
	return (
		<div>
			<Link to={url+'/'+item}>Post #{
				item
			}</Link>
			<Switch>
				<Route path={'/posts/:id'} component={DetPosts}/>
			</Switch>
		</div>
	);
}

export default Post;
