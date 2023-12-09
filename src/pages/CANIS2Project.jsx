import ProjectGallery from '../components/projects/ProjectGallery';
import ProjectHeader from '../components/projects/ProjectHeader';
import ProjectInfo from '../components/projects/ProjectInfo';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects';
import { CANIS2Provider } from '../context/CANIS2Context';
import { motion } from 'framer-motion';

const CANIS2Project = () => {
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
			<CANIS2Provider>
				<ProjectHeader id={5}/>
				<ProjectGallery id={5} />
				<ProjectInfo id={5} />
				<ProjectRelatedProjects id={5} />
			</CANIS2Provider>
		</motion.div>
	);
};

export default CANIS2Project;
