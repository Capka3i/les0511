import {useEffect, useState} from 'react';
import React from 'react';
import Post from './post/Post';
import {Route, Switch} from 'react-router-dom';
import DetPosts from './decent/DetPosts';

function Posts(props) {

	let {match: {url}} = props;

	let [post, setPost] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(value => value.json())
			.then(value => setPost([...value]));
	}, [post]);


	return (
		<div>
			{
				post.map((value) => <Post item={value.id} key={value.id} url={url}/>)

			}
			{/*<Switch>*/}
			{/*	<Route path={'/posts/:id'} component={DetPosts}/>*/}
			{/*</Switch>*/}
		</div>
	);
}

export default Posts;
