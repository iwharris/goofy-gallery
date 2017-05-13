const winners = [
	'F5D2WJX61',
	'F59F1NSBD',
	'F5696PGTV',
	'F52QYQ68K',
	'F4Z492G1G',
	'F4VLG4U3A',
	'F4SSQT84T',
	'F4Q6X159U',
	'F4L64UDK4',
	'F4GQJ0R19',
	'F4CSCN1K2',
	'F49HUT08Y',
	'F47TPKBK8',
	'F445RTQAZ',
	'F41HLELR4',
	'F3YB7D3CP',
	'F3RCJB1MH',
	'F3MNVSP97',
	'F3CAUGQHE',
	'F3A1ZAFU3',
	'F379MGAR3',
	'F34JXEQM9',
	'F2ZBWV2PR',
	'F2VPR8KA5',
	'F2SNZFF39',
	'F2PK17AEP'
];

export default {
	isWinner: function(id) {
		return winners.find((winnerId) => (winnerId === id));
	}
}