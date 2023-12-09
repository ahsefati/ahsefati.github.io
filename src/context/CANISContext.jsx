import { useState, createContext } from 'react';
import { Data as CANISDataJson } from '../data/CANIS';

const CANISContext = createContext();

export const CANISProvider = ({ children }) => {
	const [Data, setData] = useState(
		CANISDataJson
	);

	return (
		<CANISContext.Provider
			value={{ Data, setData }}
		>
			{children}
		</CANISContext.Provider>
	);
};

export default CANISContext;
