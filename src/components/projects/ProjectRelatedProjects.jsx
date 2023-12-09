import { useContext, useState, useEffect } from 'react';
import SWIMContext from '../../context/SWIMContext';
import KOOCHContext from '../../context/KOOCHContext';
import MACHINECODESContext from '../../context/MACHINECODESContext';
import CANISContext from '../../context/CANISContext';
import CANIS2Context from '../../context/CANIS2Context';
import CLOTZRContext from '../../context/CLOTZRContext';
import { Link } from 'react-router-dom';

const ProjectRelatedProjects = ({id}) => {
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
		<div className="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
			<p className="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left">
				{data?.RelatedProject.title}
			</p>

			<div className="grid grid-cols-1 sm:grid-cols-4 gap-10">
				{data?.RelatedProject.Projects.map((project) => {
					return (
						<Link to={"/projects/"+project.link} aria-label="Single Project">
							<img
								src={project.img}
								className="rounded-xl cursor-pointer"
								alt={project.title}
								key={project.id}
							/>
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default ProjectRelatedProjects;
