import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import AppFooter from './components/shared/AppFooter';
import AppHeader from './components/shared/AppHeader';
import './css/App.css';
import UseScrollToTop from './hooks/useScrollToTop';
import CANIS2Project from './pages/CANIS2Project.jsx';
import CLOTZRProject from './pages/CLOTZRProject.jsx';

const About = lazy(() => import('./pages/AboutMe'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const SWIMProject = lazy(() => import('./pages/SWIMProject.jsx'));
const KOOCHProject = lazy(() => import('./pages/KOOCHProject.jsx'));
const MACHINECODESProject = lazy(() => import('./pages/MACHINECODESProject.jsx'));
const CANISProject = lazy(() => import('./pages/CANISProject.jsx'));

function App() {
	return (
		<AnimatePresence>
			<div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
				<Router>
					<ScrollToTop />
					<AppHeader />
					<Suspense fallback={""}>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="projects" element={<Projects />} />
							<Route
								path="projects/swim-project"
								element={<SWIMProject />}
							/>
							<Route
								path="projects/kooch-project"
								element={<KOOCHProject />}
							/>
							<Route
								path="projects/machinecodes-project"
								element={<MACHINECODESProject />}
							/>
							<Route
								path="projects/canis-project"
								element={<CANISProject />}
							/>
							<Route
								path="projects/canis2-project"
								element={<CANIS2Project/>}
							/>
							<Route
								path="projects/clotzr-project"
								element={<CLOTZRProject/>}
							/>
							<Route path="about" element={<About />} />
							<Route path="contact" element={<Contact />} />
						</Routes>
					</Suspense>
					<AppFooter />
				</Router>
				<UseScrollToTop />
			</div>
		</AnimatePresence>
	);
}

export default App;
