import React from 'react';

export default React.memo(
	function Profile({ user = {} }) {
		return (
			<div>
				<code>{JSON.stringify(user, null, 2)}</code>
			</div>
		);
	},
	(prevProps, nextProps) => {
		// Render component when change user name
		if (prevProps.user.name !== nextProps.user.name) return false;
		// Not render component when change user first
		if (prevProps.user.first !== nextProps.user.first) return true;
		// Not render component enather options
		else return true;
	}
);
