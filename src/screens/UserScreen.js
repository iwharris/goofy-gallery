import React from 'react';

import {Card, CardTitle} from 'material-ui/Card';
import UserCard from '../components/UserCard';
import DrawingCardContent from '../components/DrawingCardContent';
import CircularProgress from 'material-ui/CircularProgress';
// import DrawingThumbnail from '../components/DrawingThumbnail';

import users from '../store/data/users';
import drawings from '../store/data/drawings';

const cardStyle = {
	marginBottom: '20px'
};

class UserScreen extends React.Component {
	constructor(props) {
		super(props);
		const user = this.getUser();
		this.state = {
			user: user,
			drawings: [],
			cards: [],
			isLoading: true
		};
	}

	getUser(id) {
		let userId = id || this.props.match.params.id;
		let user = users.getUserById(userId) || users.getUserByUsername(userId);
		return user;
	}

	componentWillReceiveProps(nextProps) {
		const newId = nextProps.match.params.id;
		if (newId !== this.props.match.params.id) {
			const user = this.getUser(newId);
			this.fetchDrawings(user);
		}
	}

	fetchDrawings(user) {
		if (!user) {
			this.setState({
				user: null,
				drawings: [],
				cards: [],
				isLoading: false
			});
			return;
		 }
		return drawings.getDrawings({ user: user.id })
			.then((fetchedDrawings) => {
				this.setState({
					user: Object.assign(user),
					drawings: fetchedDrawings,
					cards: this.renderCards(fetchedDrawings, user),
					isLoading: false
				});
			}, () => { this.setState({
				user: Object.assign(user),
				drawings: [],
				cards: [],
				isLoading: false
			})});
	}

	renderCards(drawings, user) {
		return drawings.map((drawing) => (
			<Card style={cardStyle} key={drawing.id}>
				<DrawingCardContent
					user={user}
					drawing={drawing}
					style={cardStyle}
				/>
			</Card>
			// <Card style={cardStyle}>
			// 	<DrawingThumbnail
			// 		key={drawing.id}
			// 		user={user}
			// 		drawing={drawing}
			// 		className='center-content'
			// 	/>
			// </Card>
		));
	}

	render() {
		return (
			<div key='drawings'>
				<h2>User Profile</h2>

				<UserCard
					user={this.state.user}
					drawings={this.state.drawings}
					style={cardStyle}
				/>
				{ (!!this.state.user && !!this.state.cards && this.state.cards.length)
					? this.state.cards
					: (!!this.state.isLoading  && !!this.state.user
						? (
							<div style={{
								width: '600px',
								height: '200px',
								margin: '-100px 0 0 -300px',
								position: 'absolute',
								top: '60%',
								left: '50%'
							}}>
								<CircularProgress size={80} thickness={5} /> {`We're fetching ${this.state.user.real_name || this.state.user.name}'s art; please wait...`}
							</div>
					) : <Card><CardTitle>This user has no drawings.</CardTitle></Card>)}
			</div>
		);
	}

	componentDidMount() {
		window.scrollTo(0, 0);
		this.fetchDrawings(this.state.user);
	}
}

export default UserScreen;