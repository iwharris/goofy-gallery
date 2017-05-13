// import React from 'react';
// import QueryString from 'query-string';
// import { getUser } from '../store/AuthSession';

// const handleOAuth = function(history) {
// 	if (!!history && history.location.search) {
// 		var parsedQuery = QueryString.parse(history.location.search);
// 		if (!!parsedQuery.code) {  // OAuth success
// 			let code = parsedQuery.code, state = parsedQuery.state;
// 			let token = getUser(code);
// 			console.log(token)
// 			history.push('/user')
// 		} else if (!!parsedQuery.error) {  // OAuth error
// 			let error = parsedQuery.error, state = parsedQuery.state;
// 			history.push('/gallery');
// 		}
// 	}
// };

// class OAuthHandler extends React.Component {
// 	render() {
// 		return (
// 			<h2>Redirecting you...</h2>
// 		);
// 	}

// 	componentDidMount() {
// 		handleOAuth(this.props.history);
// 	}
// }

// export default OAuthHandler;