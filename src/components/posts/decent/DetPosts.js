import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';

function DetPosts(props) {
	let params = useParams();
		let [detal, setDetal] = useState(null);
	useEffect(()=>{
		fetch('https://jsonplaceholder.typicode.com/posts/'+ params.id)
		  .then(value => value.json())
		  .then(value => setDetal({...value}))
	},[])
	return (
		<div>
			{detal && <div>
				id: {detal.id} <br/>
				title: {detal.title} <br/>
				body: {detal.body} <br/></div>}
		</div>
	);
}

export default DetPosts;
