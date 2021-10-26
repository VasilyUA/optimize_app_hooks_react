import React from 'react';
import Buttons from './Buttons';

export default function LerntUseCollback() {
	const [count, setCount] = React.useState(0);
	const [number, setNumber] = React.useState(1);

	const onPlus = React.useCallback(() => setCount((count) => count + (number > 1 ? number : 1)), [number]);
	const onMinus = React.useCallback(() => setCount((count) => count - (number > 1 ? number : 1)), [number]);

	return (
		<div>
			<input
				type='number'
				placeholder='name'
				value={number}
				title='name'
				min='1'
				onChange={(e) => setNumber((number) => (number < 1 ? 1 : Number(e.target.value)))}
			/>
			<br />
			<strong>{count}</strong>
			<br />
			<Buttons onPlus={onPlus} onMinus={onMinus} />
		</div>
	);
}
