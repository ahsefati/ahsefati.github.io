import { useState, createContext } from 'react';
import { Data as KOOCHDataJson } from '../data/KOOCH';

const KOOCHContext = createContext();

export const KOOCHProvider = ({ children }) => {
	const [Data, setData] = useState(
		KOOCHDataJson
	);

	return (
		<KOOCHContext.Provider
			value={{ Data, setData }}
		>
			{children}
		</KOOCHContext.Provider>
	);
};

export default KOOCHContext;
