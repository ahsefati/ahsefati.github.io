import { useContext, useState, useEffect } from 'react';
import { FiAlertCircle, FiClock, FiTag } from 'react-icons/fi';
import SWIMContext from '../../context/SWIMContext';
import KOOCHContext from '../../context/KOOCHContext';
import MACHINECODESContext from '../../context/MACHINECODESContext';
import CANISContext from '../../context/CANISContext';
import CANIS2Context from '../../context/CANIS2Context';
import CLOTZRContext from '../../context/CLOTZRContext';

const ProjectSingleHeader = ({id}) => {
	const [data, setData] = useState()
	const { Data } = useContext(
		id===1?SWIMContext:
		id===2?KOOCHContext:
		id===3?MACHINECODESContext:
		id===4?CANISContext:
		id===5?CANIS2Context:
		id===6?CLOTZRContext:''
	);
	useEffect(()=>{
		setData(Data)
	},[])

	return (
		<div>
			<p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
				{data?.ProjectHeader.title}
			</p>
			<div className="flex">
				<div className="flex items-center mr-10">
					<FiClock className="text-lg text-ternary-dark dark:text-ternary-light" />
					<span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
						{data?.ProjectHeader.publishDate}
					</span>
				</div>
				<div className="flex items-center mr-10">
					<FiTag className="text-lg text-ternary-dark dark:text-ternary-light" />
					<span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
						{data?.ProjectHeader.tags}
					</span>
				</div>
				<div className="flex items-center">
					<FiAlertCircle className="text-lg text-ternary-dark dark:text-ternary-light" />
					<span className='text-xl font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light'>
						Interactive Demo for Mobile | Click on Laptop to open it!
					</span>
				</div>
			</div>
		</div>
	);
};

export default ProjectSingleHeader;
