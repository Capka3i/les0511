function Comments({item}) {
	return (
		<div>
			Id - {item.id}
			<br/>
			name - {item.name}
			<br/>
			email - {item.email}
			<br/>
			body - {item.body}
		</div>
	);
}

export default Comments;
