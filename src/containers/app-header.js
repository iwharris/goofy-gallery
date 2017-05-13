import React from 'react';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import Link from 'react-router-dom/Link';
import { deepOrange500 } from 'material-ui/styles/colors';

class AppHeader extends React.Component {
	render() {
		return (
			<Toolbar style={{backgroundColor: deepOrange500}} className="gg-header">
				<ToolbarGroup className="header-item" firstChild={true}>
					<Link to="/" className="header-first header-item header-link">
						<ToolbarTitle text='#goofydrawings' />
					</Link>
				</ToolbarGroup>
				<ToolbarGroup>
					{/*<Link className='header-item header-link' to={{ pathname: '/gallery?show=hof' }}> Hall of Fame </Link>*/}
					<Link className='header-item header-link' to={{ pathname: '/user/beau.calvez' }}> Hall of Shame </Link>
				</ToolbarGroup>
			</Toolbar>
		);
	}
}

export default AppHeader;