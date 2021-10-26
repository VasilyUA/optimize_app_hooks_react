import React from 'react';

export default React.memo(function GetCounter({ count }) {
	return (
		<div>
			<br />
			<strong>{count}</strong>
		</div>
	);
});
