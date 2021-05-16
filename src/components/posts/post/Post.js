import React from "react";
import {
  Link
} from "react-router-dom";

function Post(props) {
	// console.log(props);
	let {item,url} = props;



	return (
		<div>
			{
			<Link to={{pathname: url + '/' + item.id}} >Posts #{item.id}</Link>
			}
			<br/>
			title - {item.title}
			<br/>
			body - {item.body}
		</div>
	);
}

export default Post;
