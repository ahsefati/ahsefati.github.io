import { useState, createContext } from 'react';
import { Data as CLOTZRDataJson } from '../data/CLOTZR';

const CLOTZRContext = createContext();

export const CLOTZRProvider = ({ children }) => {
	const [Data, setData] = useState(
		CLOTZRDataJson
	);

	return (
		<CLOTZRContext.Provider
			value={{ Data, setData }}
		>
			{children}
		</CLOTZRContext.Provider>
	);
};

export default CLOTZRContext;
