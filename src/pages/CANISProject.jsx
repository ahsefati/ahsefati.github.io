import ProjectGallery from '../components/projects/ProjectGallery';
import ProjectHeader from '../components/projects/ProjectHeader';
import ProjectInfo from '../components/projects/ProjectInfo';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects';
import { CANISProvider } from '../context/CANISContext';
import { motion } from 'framer-motion';

const CANISProject = () => {
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
			<CANISProvider>
				<ProjectHeader id={4}/>
				<ProjectGallery id={4} />
				<ProjectInfo id={4} />
				<ProjectRelatedProjects id={4} />
			</CANISProvider>
		</motion.div>
	);
};

export default CANISProject;
