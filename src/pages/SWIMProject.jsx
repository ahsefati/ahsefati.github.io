import ProjectGallery from '../components/projects/ProjectGallery';
import ProjectHeader from '../components/projects/ProjectHeader';
import ProjectInfo from '../components/projects/ProjectInfo';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects';
import { SWIMProvider } from '../context/SWIMContext';
import { KOOCHProvider } from '../context/KOOCHContext';
import { motion } from 'framer-motion';

const SWIMProject = () => {
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
			<SWIMProvider>
				<ProjectHeader id={1}/>
				<ProjectGallery id={1} />
				<ProjectInfo id={1} />
				<ProjectRelatedProjects id={1} />
			</SWIMProvider>
		</motion.div>
	);
};

export default SWIMProject;
