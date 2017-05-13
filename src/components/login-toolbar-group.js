import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import Avatar from 'material-ui/Avatar';
import ToolbarGroup from 'material-ui/Toolbar/ToolbarGroup';

import QueryString from 'query-string';

function SlackButton() {
  let href = 'https://slack.com/oauth/authorize?' + QueryString.stringify({
    scope: 'identity.basic,identity.avatar',
    state: 'something',
    client_id: '4995230642.181507674048',
  });
  return (
	  <a href={href}><img alt="Sign in with Slack" height="40" width="172" src="https://platform.slack-edge.com/img/sign_in_with_slack.png" srcSet="https://platform.slack-edge.com/img/sign_in_with_slack.png 1x, https://platform.slack-edge.com/img/sign_in_with_slack@2x.png 2x" /></a>
  )
}

class AuthenticatedToolbarGroup extends React.Component {
	render() {
		const user = this.props.user;
		const style = {marginLeft: '5px', marginRight: '5px'}
		return (
			<ToolbarGroup
				firstChild={this.props.firstChild}
				lastChild={this.props.lastChild}
			>
				<Avatar size={40} src={user.profile.image_48} />
				<FlatButton style={style} href={'/user/' + user.id} label={user.real_name} />
			</ToolbarGroup>
		);
	}
}

class UnauthenticatedToolbarGroup extends React.Component {
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
    return (
        <ToolbarGroup
          firstChild={this.props.firstChild}
          lastChild={this.props.lastChild}
        >
          <FlatButton
            onTouchTap={this.handleOpen}
            label="Log in"
            primary={false}
            icon={<FontIcon className="material-icons">person</FontIcon>}
          />
          <Dialog
            title="Log In"
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
          >
            <p>Sign in using Slack to see your stats and artwork.</p>
            <SlackButton />
          </Dialog>
        </ToolbarGroup>
      );
  }
}

export default class LoginToolbarGroup extends React.Component {


  render() {
    const user = this.props.user;
    if (user && !!user.id) {
      return (
        <AuthenticatedToolbarGroup
          user={user}
          firstChild={this.props.firstChild}
          lastChild={this.props.lastChild}
        />
      );
    } else {
      return (
        <UnauthenticatedToolbarGroup
          user={user}
        />
      );
    }
  }
}