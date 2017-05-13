import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppHeader from './containers/app-header';
import UserScreen from './screens/UserScreen';
import GalleryScreen from './screens/GalleryScreen';
// import OAuthScreen from './screens/OAuthScreen';
import {cyan500, cyan700,
  pinkA200,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import './index.css';

// Needed for onTouchTap
injectTapEventPlugin();

const App = () => (
  <div>
      <AppHeader />
      <AppContainer />
  </div>
);

const muiTheme = getMuiTheme({
  fontFamily: 'Roboto, sans-serif',
  palette: {
      primary1Color: cyan500,
      primary2Color: cyan700,
      primary3Color: grey400,
      accent1Color: pinkA200,
      accent2Color: grey100,
      accent3Color: grey500,
      textColor: darkBlack,
      alternateTextColor: white,
      canvasColor: white,
      borderColor: grey300,
      disabledColor: fade(darkBlack, 0.3),
      pickerHeaderColor: cyan500,
      clockCircleColor: fade(darkBlack, 0.07),
      shadowColor: fullBlack,
  }
});

const AppContainer = (props) => (
	<main className="gg-content">
		<Switch>
			<Route path='/gallery' component={GalleryScreen} />
			<Route path='/user/:id' component={UserScreen} />
      {/*<Route path='/oauth' component={OAuthScreen} />*/}
      <Redirect to='/gallery' />
		</Switch>
	</main>
);

ReactDOM.render((
  <MuiThemeProvider muiTheme={muiTheme}>
    <HashRouter>
      <App />
    </HashRouter>
  </MuiThemeProvider>
), document.getElementById('root')
);
