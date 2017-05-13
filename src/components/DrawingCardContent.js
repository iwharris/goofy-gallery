import React from 'react';
import {CardMedia, CardTitle, CardText} from 'material-ui/Card';
import UserCardHeader from '../components/UserCardHeader';
import Divider from 'material-ui/Divider';
// import FontIcon from 'material-ui/FontIcon';

import animals from '../store/data/animals';
import drawings from '../store/data/drawings';
import winners from '../store/data/winners';

// const iconStyles = { marginRight: 6 };

export default (props) => {
	if (!props.user || !props.drawing) { return; }
	const user = props.user;
	const drawing = props.drawing;

	const animalCode = animals.getAnimalByDate(drawings.getDateCode(drawing));
	const animalName = animals.getHumanReadableAnimal(animalCode);
	const isWinner = winners.isWinner(drawing.id);

	return (
		<div>
			<UserCardHeader
				user={user}
				subtitle={drawings.getHumanReadableTimestamp(drawing)}
				cardHeaderProps={{ actAsExpander: true, showExpandableButton: true }}
			/>
			<Divider />
			{isWinner ? (
				<CardText>
					<span>
						{/* <FontIcon className="material-icons" style={iconStyles}>star_rate</FontIcon> */}
						WINNER!
					</span>
				</CardText>
			 ) : ''}
			<CardText>
				{!!drawing.initial_comment ? '"' + drawing.initial_comment.comment + '"' : ''}
			</CardText>
			<CardMedia
				overlayContentStyle={{position: 'relative'}}
				overlayContainerStyle={{position: 'relative'}}
				overlay={(
					<CardTitle
						title={animalName}
						subtitle={drawing.name || drawing.title}
					/>
				)}
			>
			<div className='center-content' style={{ height: '40%' }}>
				<img src={drawing.url_private} alt={drawing.title}/>
			</div>
			</CardMedia>
		</div>
	)
};