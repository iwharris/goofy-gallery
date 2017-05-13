import React from 'react';
import {CardHeader} from 'material-ui/Card';

export default (props) => {
	const user = props.user;
	return (
		<CardHeader
			title={user.real_name || user.name}
			subtitle={props.subtitle || user.profile.title}
			avatar={user.profile.image_72}
			{...props.cardHeaderProps}
		/>
	);
};
