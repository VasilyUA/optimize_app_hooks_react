import React from 'react';

export default React.memo(function Buttons({ onPlus, onMinus }) {
	return (
		<div>
			<button type='button' onClick={onPlus}>
				+
			</button>
			<button type='button' onClick={onMinus}>
				-
			</button>
		</div>
	);
});
