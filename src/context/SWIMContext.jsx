import { useState, createContext } from 'react';
import { Data as SWIMDataJson } from '../data/SWIM';

const SWIMContext = createContext();

export const SWIMProvider = ({ children }) => {
	const [Data, setData] = useState(
		SWIMDataJson
	);

	return (
		<SWIMContext.Provider
			value={{ Data, setData }}
		>
			{children}
		</SWIMContext.Provider>
	);
};

export default SWIMContext;
