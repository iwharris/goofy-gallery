function cleanUsers(users) {
	const userList = users.slice();

	let newJson = userList.map(
		(user) => {
			return !!drawings.getDrawingsByUserId(user.id).length ? user : null
		}
	).filter((user) => (!!user)
	).map((user) => {
		let newProfile = (({ image_32, image_48, image_72, image_512, title }) => ({ image_32, image_48, image_72, image_512, title }))(user.profile);
		let newUser = (({ id, name, real_name }) => ({ id, name, real_name }))(user)
		newUser.profile = newProfile;
		return newUser
	})
	;
	// console.log(newJson.map((user) => (user.name)))
	// console.log(newJson);
	// console.log(JSON.stringify(newJson, null, 4));
}