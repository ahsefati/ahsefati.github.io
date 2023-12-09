import { useState, createContext } from 'react';
import { Data as CANIS2DataJson } from '../data/CANIS2';

const CANIS2Context = createContext();

export const CANIS2Provider = ({ children }) => {
	const [Data, setData] = useState(
		CANIS2DataJson
	);

	return (
		<CANIS2Context.Provider
			value={{ Data, setData }}
		>
			{children}
		</CANIS2Context.Provider>
	);
};

export default CANIS2Context;
