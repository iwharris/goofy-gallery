import React from 'react';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import UserCardHeader from '../components/UserCardHeader';
import winners from '../store/data/winners';
import Divider from 'material-ui/Divider';

const UserStats = (props) => {
	const user = props.user;
	const drawings = props.drawings || [];

	let winCount = drawings.filter((drawing) => (drawing.user === user.id && winners.isWinner(drawing.id))).length;
	let submittedCount = drawings.filter((drawing) => (drawing.user === user.id)).length;

	return (
		<div>
			<h3>Stats</h3>
			<ul>
				<li>Wins: {winCount}</li>
				<li>Drawings Submitted: {submittedCount}</li>
			</ul>
		</div>
	);
};

export default (props) => {
	const user = props.user;
	const drawings = props.drawings || [];
	return (
		!!user ? (
			<Card style={props.style}>
				<UserCardHeader user={user} />
				<Divider />
				<CardText>
					<UserStats user={user} drawings={drawings} />
				</CardText>
			</Card>
		) : (
			<Card style={props.style}>
				<CardTitle>User Not Found.</CardTitle>
			</Card>
		)
	);
}