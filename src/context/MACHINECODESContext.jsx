import { useState, createContext } from 'react';
import { Data as MACHINECODESDataJson } from '../data/MACHINECODES';

const MACHINECODESContext = createContext();

export const MACHINECODESProvider = ({ children }) => {
	const [Data, setData] = useState(
		MACHINECODESDataJson
	);

	return (
		<MACHINECODESContext.Provider
			value={{ Data, setData }}
		>
			{children}
		</MACHINECODESContext.Provider>
	);
};

export default MACHINECODESContext;
