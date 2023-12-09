import ProjectGallery from '../components/projects/ProjectGallery';
import ProjectHeader from '../components/projects/ProjectHeader';
import ProjectInfo from '../components/projects/ProjectInfo';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects';
import { MACHINECODESProvider } from '../context/MACHINECODESContext';
import { motion } from 'framer-motion';

const MACHINECODESProject = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.6,
				delay: 0.15,
			}}
			className="container mx-auto mt-5 sm:mt-10"
		>
			<MACHINECODESProvider>
				<ProjectHeader id={3}/>
				<ProjectGallery id={3} />
				<ProjectInfo id={3} />
				<ProjectRelatedProjects id={3} />
			</MACHINECODESProvider>
		</motion.div>
	);
};

export default MACHINECODESProject;
