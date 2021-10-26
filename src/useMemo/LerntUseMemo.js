import React from 'react';

import Profile from './Profile';

const createUser = (name, first) => ({ name, first });

export default React.memo(function LerntUseMemo() {
	const [name, setName] = React.useState('');
	const [first, setFirst] = React.useState('');

	const user = React.useMemo(() => createUser(name, first), [name, first]);
	return (
		<div>
			<h1>Use Memo</h1>
			<div>
				<input type='text' placeholder='name' value={name} title='name' onChange={(e) => setName(e.target.value)} />
				<input type='text' placeholder='first' value={first} title='first' onChange={(e) => setFirst(e.target.value)} />
			</div>
			<br />
			<h1>Memo Component</h1>
			<Profile user={user} />
		</div>
	);
});
