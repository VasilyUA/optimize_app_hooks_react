import React from 'react';
import './App.css';
import LerntUseMemo from './useMemo/LerntUseMemo';
import LerntUseCollback from './useCallback/LerntUseCollback';

function App() {
	return (
		<div className='App'>
			<LerntUseMemo />
			<br />
			<br />
			<br />
			<br />
			<LerntUseCollback />
		</div>
	);
}

export default App;
