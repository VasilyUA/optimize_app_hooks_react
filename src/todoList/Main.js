import React from 'react';
import { Context } from '../useContext/learntUseContext';
import GetCounter from './GetCounter';

export default React.memo(function Main({ state }) {
	const { dispatch } = React.useContext(Context);

	const onPlus = React.useCallback(() => dispatch({ type: 'pluss' }), [dispatch]);
	const onMinus = React.useCallback(() => dispatch({ type: 'minus' }), [dispatch]);

	return (
		<div>
			<h1>Use Reduser</h1>
			<button type='button' onClick={onPlus}>
				+
			</button>
			<button type='button' onClick={onMinus}>
				-
			</button>
			<GetCounter count={state} />
		</div>
	);
});
