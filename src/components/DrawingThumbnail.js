import React from 'react';
import Dialog from 'material-ui/Dialog';
import DrawingCardContent from '../components/DrawingCardContent';

const lightboxStyle = {
	width: '100%',
	height: '100%',
	// maxWidth: 'none',
	// maxHeight: 'none'
}

export default class DrawingThumbnail extends React.Component {
	state = {
		open: false,
	};

	handleOpen = () => {
		this.setState({open: true});
	};

	handleClose = () => {
		this.setState({open: false});
	};

	render() {
		const user = this.props.user;
		const drawing = this.props.drawing;
		return (
			<div className='center-content'>
				<Dialog
					autoScrollBodyContent={true}
					modal={false}
					onRequestClose={this.handleClose}
					contentStyle={lightboxStyle}
					open={this.state.open}
				>
					<DrawingCardContent user={user} drawing={drawing} />
				</Dialog>
				<img alt={drawing.title} src={drawing.thumb_360} onTouchTap={this.handleOpen} />
			</div>
		);
	}
};