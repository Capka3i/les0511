import {useEffect, useState} from 'react';

function Detal(props) {
	console.log(props);
	let {match:{params:{id}}} = props;
	let [detal, setDetal] = useState(null);
	useEffect(()=>{
		fetch('https://jsonplaceholder.typicode.com/comments/'+ id)
		  .then(value => value.json())
		  .then(value => setDetal(value))
	},[detal])
	return (
		<div>
			{detal && <div>{detal.name} <br/>{detal.email} <br/>{detal.body}</div>}
		</div>
	);
}

export default Detal;
