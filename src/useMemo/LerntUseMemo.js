import React from 'react';

import Profile from './Profile';

const createUser = (name, first) => ({ name, first });

export default function LerntUseMemo() {
	const [name, setName] = React.useState('');
	const [first, setFirst] = React.useState('');

	const user = React.useMemo(() => createUser(name, first), [name, first]);
	return (
		<div>
			<div>
				<input type='text' placeholder='name' value={name} title='name' onChange={(e) => setName(e.target.value)} />
				<input type='text' placeholder='first' value={first} title='first' onChange={(e) => setFirst(e.target.value)} />
			</div>
			<br />
			<Profile user={user} />
		</div>
	);
}
