import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import { FiArrowDownCircle } from 'react-icons/fi';
import developerLight from '../../images/developer.svg';
import developerDark from '../../images/developer-dark.svg';
import { motion } from 'framer-motion';
import { BiLogoNodejs, BiLogoHtml5, BiLogoCss3, BiLogoGit, BiLogoDocker, BiLogoFlask, BiLogoFigma, BiLogoJquery , BiLogoNetlify, BiLogoMongodb, BiLogoReact, BiLogoJavascript, BiLogoPython, BiLogoRedux, BiLogoTypescript, BiLogoSass, BiLogoPostgresql, BiLogoHeroku, BiLogoAws  } from "react-icons/bi";

const AppBanner = () => {
	const [activeTheme] = useThemeSwitcher();

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
			className="flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2"
		>
			<div className="w-full md:w-1/3 text-left">
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.1,
					}}
					className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"
				>
					Hi, I am Amirhossein
				</motion.h1>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.2,
					}}
					className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200"
				>
					A Full-Stack Developer & Problem Solver 
				</motion.p>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.3,
					}}
					className="flex justify-center sm:block"
				>
					<a
						download="Sefati-Resume.pdf"
						href="/files/Sefati-Resume.pdf"
						className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
						aria-label="Download Resume"
					>
						<FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
						<span className="text-sm sm:text-lg font-general-medium duration-100">
							Download CV
						</span>
					</a>
				</motion.div>
				<motion.div 
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 1,
						delay: 1,
					}}
					className="flex flex-row justify-between mt-8"
				>
					<BiLogoHtml5 title='HTML5' className="flex text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl mt-2" size={36}/>
					<BiLogoCss3 title='CSS3' className="flex text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl mt-2" size={36}/>
					<BiLogoJavascript title='JavaScript' className="flex text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl mt-2" size={36}/>
					<BiLogoTypescript title='TypeScript' className="flex text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl mt-2" size={36}/>
					<BiLogoPython title='Python' className="flex text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl mt-2" size={36}/>
					<BiLogoSass title='Sass' className="flex text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl mt-2" size={36}/>
				</motion.div>
				<motion.div 
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 1,
						delay: 1,
					}}
					className="flex flex-row justify-between"
				>
					<BiLogoJquery title='JQuery' className="flex text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl mt-2" size={36}/>
					<BiLogoReact title='ReactJS' className="flex text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl mt-2" size={36}/>
					<BiLogoNodejs title='NodeJS' className="flex text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl mt-2" size={36}/>
					<BiLogoRedux title='Redux' className="flex text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl mt-2" size={36}/>
					<BiLogoFlask title='Flask' className="flex text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl mt-2" size={36}/>
					<BiLogoDocker title='Docker' className="flex text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl mt-2" size={36}/>
				</motion.div>
				<motion.div 
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 1,
						delay: 1,
					}}
					className="flex flex-row justify-between"
				>
					<BiLogoMongodb title='MongoDB' className="flex text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl mt-2" size={36}/>
					<BiLogoGit title='Git' className="flex text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl mt-2" size={36}/>
					<BiLogoFigma title='Figma' className="flex text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl mt-2" size={36}/>
					<BiLogoAws title='AWS' className="flex text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl mt-2" size={36}/>
					<BiLogoHeroku title='Heroku' className="flex text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl mt-2" size={36}/>
					<BiLogoNetlify title='Netlify' className="flex text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl mt-2" size={36}/>
				</motion.div>
			</div>
			<motion.div
				initial={{ opacity: 0, y: -180 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
				className="w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0"
			>
				<img
					src={
						activeTheme === 'dark' ? developerLight : developerDark
					}
					alt="Developer"
				/>
			</motion.div>
		</motion.section>
	);
};

export default AppBanner;
