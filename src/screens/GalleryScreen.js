import React from 'react';
import Link from 'react-router-dom/Link';
import QueryString from 'query-string';
import FontIcon from 'material-ui/FontIcon';
import Dialog from 'material-ui/Dialog';
import CircularProgress from 'material-ui/CircularProgress';
import DrawingCardContent from '../components/DrawingCardContent';

import {GridList, GridTile} from 'material-ui/GridList';
// import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {white, /*grey600,*/ yellow500} from 'material-ui/styles/colors';

import animals from '../store/data/animals';
import drawings from '../store/data/drawings';
import users from '../store/data/users';
import winners from '../store/data/winners';

const artistLinkStyle = {
	textDecoration: 'none',
	color: white
};

const winButtonStyle = {
	color: yellow500,
	marginRight: 8
}

const lightboxStyle = {
	width: '80%',
	maxWidth: 'none',
	height: '80%',
	maxHeight: 'none',
}

// class GalleryFilter extends React.Component {
// 	constructor(props) {
// 		super();
// 	}

// 	render() {
// 		return (
// 			<Toolbar style={{ backgroundColor: grey600, color: white, marginBottom: 20 }}>
// 				<ToolbarGroup firstChild={true}>
// 				</ToolbarGroup>
// 			</Toolbar>
// 		)
// 	}
// }

class GalleryTile extends React.Component {
	constructor(props) {
		super();
		this.props = props;
		this.state = { open: false };
	}

	handleOpen = () => {
		this.setState({open: true});
	}

	handleClose = () => {
		this.setState({open: false});
	}

	getTitle(drawing, user) {
		const animal = animals.getHumanReadableAnimal(animals.getAnimalByDate(drawings.getDateCode(drawing))) || 'Unknown Creature';
		let username = user.real_name || user.name;
		if (!!username) {
			username = <Link style={artistLinkStyle} to={{ pathname: `/user/${user.name}` }}>{username}</Link>;
		} else {
			username = 'Unknown Artist'
		}
		return (<div>{`${animal} by`} {username}</div>);
	}

	getSubtitle(drawing, user) {
		return drawings.getHumanReadableTimestamp(drawing);
	}

	render() {
		const drawing = this.props.drawing;
		const user = this.props.user;
		return (
			<GridTile
				title={this.getTitle(drawing, user)}
				subtitle={this.getSubtitle(drawing, user)}
				actionIcon={winners.isWinner(drawing.id) ? <FontIcon style={winButtonStyle} className='material-icons'>grade</FontIcon> : null}
			>
				<Dialog className={'dialog-root'}
					autoScrollBodyContent={true}
					modal={false}
					onRequestClose={this.handleClose}
					contentStyle={lightboxStyle}
					open={this.state.open}
					repositionOnUpdate={ false }
				>
					<DrawingCardContent user={user} drawing={drawing} />
				</Dialog>
				<img className='fillwidth fillheight' src={drawing.thumb_720 || drawing.thumb_360} alt={drawing.title} onTouchTap={this.handleOpen} />
			</GridTile>
		);
	}
}

class GalleryGrid extends React.Component {
	render() {
		if (!this.props.drawings || !this.props.drawings.length) {
			return (
				<div style={{
					width: '400px',
					height: '200px',
					margin: '-100px 0 0 -200px',
					position: 'absolute',
					top: '50%',
					left: '50%'
				}}>
					<CircularProgress size={80} thickness={5} /> We're fetching some art; please wait...
				</div>
			)
		}
		return (
			<GridList
				cellHeight={360}
				cols={3}
				padding={8}
			>
				{this.props.drawings.map((drawing) => (
					<GalleryTile drawing={drawing} user={users.getUserById(drawing.user)} key={drawing.id} />
				))}
			</GridList>
		);
	}
}

class GalleryScreen extends React.Component {
	constructor(props) {
		super();
		this.props = props;

		const queryParams = this.getPropsFromQueryString();

		this.state = {
			filter: Object.assign({}, queryParams.user, queryParams.username, queryParams.animal),
			drawings: []
		};

		this.fetchDrawings(this.state.filter);
	}

	componentWillReceiveProps(nextProps) {
		// const newQueryParams = this.getPropsFromQueryString(nextProps.location.search);
	}

	getPropsFromQueryString(queryString) {
		return QueryString.parse(queryString || this.props.location.search)
	}

	fetchDrawings(filter = {}) {
		return drawings.getDrawings(filter)
			.then((fetchedDrawings) => {
				this.setState({
					drawings: fetchedDrawings
				});
			});
	}

	render() {
		return (
			<div>
				{/*<GalleryFilter filter={this.state.filter} />*/}
				<GalleryGrid drawings={this.state.drawings} />
			</div>
		);
	}
}

export default GalleryScreen;