import ProjectGallery from '../components/projects/ProjectGallery';
import ProjectHeader from '../components/projects/ProjectHeader';
import ProjectInfo from '../components/projects/ProjectInfo';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects';
import { SWIMProvider } from '../context/SWIMContext';
import { KOOCHProvider } from '../context/KOOCHContext';
import { motion } from 'framer-motion';

const KOOCHProject = () => {
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
			<KOOCHProvider>
				<ProjectHeader id={2}/>
				<ProjectGallery id={2} />
				<ProjectInfo id={2} />
				<ProjectRelatedProjects id={2} />
			</KOOCHProvider>
		</motion.div>
	);
};

export default KOOCHProject;
