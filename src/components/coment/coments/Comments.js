import {useEffect, useState} from 'react';
import Comment from '../coment/Comment';

function Comments(props) {
	let {match:{url}} = props;

	let [comments, setComments] = useState([]);

	useEffect(()=>{
		fetch('https://jsonplaceholder.typicode.com/comments')
		  .then(value => value.json())
		  .then(value => setComments([...value]))
	} ,[])
	return (
		<div>
			{
				comments.map((value,index) => <Comment key={index} item={value} url={url} />)
			}
		</div>
	);
}

export default Comments;
