import React from 'react';
import './App.css';
import { Context } from './useContext/learntUseContext';
import LerntUseMemo from './useMemo/LerntUseMemo';
import LerntUseCollback from './useCallback/LerntUseCollback';
import { reduser, initialState } from './useReduser/reduser';
import Main from './todoList/Main';

function App() {
	const [state, dispatch] = React.useReducer(reduser, initialState);
	return (
		<Context.Provider value={{ dispatch }}>
			<div className='App'>
				<LerntUseMemo />
				<br />
				<br />
				<br />
				<br />
				<LerntUseCollback />
				<br />
				<br />
				<br />
				<br />
				<Main state={state} />
			</div>
		</Context.Provider>
	);
}

export default App;
