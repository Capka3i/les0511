import React from 'react';
import {
	Link
} from 'react-router-dom';

function Comment({item, url}) {
	console.log(url);
	return (
		<div>
			<Link to={url+'/'+item.id}>Comments #{item.id}</Link>
		</div>

	);
}

export default Comment;
