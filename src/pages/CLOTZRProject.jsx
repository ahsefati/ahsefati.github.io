import ProjectGallery from '../components/projects/ProjectGallery';
import ProjectHeader from '../components/projects/ProjectHeader';
import ProjectInfo from '../components/projects/ProjectInfo';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects';
import { CLOTZRProvider } from '../context/CLOTZRContext';
import { motion } from 'framer-motion';

const CLOTZRProject = () => {
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
			<CLOTZRProvider>
				<ProjectHeader id={6}/>
				<ProjectGallery id={6} />
				<ProjectInfo id={6} />
				<ProjectRelatedProjects id={6} />
			</CLOTZRProvider>
		</motion.div>
	);
};

export default CLOTZRProject;
