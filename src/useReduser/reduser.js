// eslint-disable-next-line import/no-anonymous-default-export
export const reduser = (statue, action) => {
	switch (action.type) {
		case 'pluss':
			return statue + 1;
		case 'minus':
			return statue - 1;
		default:
			return statue;
	}
};

export const initialState = 0;
