// Import images
import Image1 from '../images/Webapps/MachineCodes_desktop.png';
import CLOTZRImage from '../images/Webapps/Clotzr_desktop.png';
import SWIMImage from '../images/Webapps/SWIM_desktop.png';
import KOOCHImage from '../images/Webapps/Kooch_desktop.png';
// Import icons
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

export const Data = {
	ProjectHeader: {
		title: 'MachineCodes - React.js Code Automation',
		publishDate: 'Jun, 2022',
		tags: 'Frontend',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'MachineCodes - React.js Code Automation',
			img: Image1,
		},
	],
	ProjectInfo: {
		ClientHeading: 'About Client',
		CompanyInfo: [
			{
				id: 1,
				title: 'Myself',
				details: 'To broaden my React skills.',
			},
			{
				id: 2,
				title: 'Services',
				details: 'React Template Builder - Code Automation.',
			},
			{
				id: 3,
				title: 'Website',
				details: 'https://machinecodes.netlify.app',
			},
			{
				id: 4,
				title: 'Phone',
				details: '(+1) 825-365-7563',
			},
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			'To dive deepr into the React.js programming world, I started this project since June of 2022. The project aims to automatically create templates for different configurations, layouts and components.',
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'JavaScript',
					'React.js',
					'JSX',
					'AntD',
					'Netlify'
				],
			},
		],
		ProjectDetailsHeading: 'Challenge',
		ProjectDetails: [
			{
				id: 1,
				details:
					"Starting from scratch is always a pain. 2 years ago, I started to think about the fact that many of the web applications out there use the same structure. In this project, the general layout has 4 different configurations. Then, for each, I have implemented more than 10 different settings. After that, user can create as many pages as they require. For each page, user can design the layout by using rows and columns concept while having different settings for each size of display including small and big screens. Additionally, user can add different components to each element which includes more than 30 different components including input and output elements such as text, button, table, etc.",
			},
			{
				id: 2,
				details:
					'Using AntD library for the UI helps the project to go faster and more professional. The user has many different choices which covers different aspects of the UI, including responsiveness as the most important requirement.',
			},
			{
				id: 3,
				details:
					'The development of this project helped me to get deeper in React framework and made me more confident in it. As I was so busy at the time, the project is not completely finished while it can be used in some cases.',
			},
		],
		SocialSharingHeading: 'Share This',
		SocialSharing: [
			{
				id: 1,
				name: 'Twitter',
				icon: <FiTwitter />,
				url: 'https://twitter.com/',
			},
			{
				id: 2,
				name: 'Instagram',
				icon: <FiInstagram />,
				url: 'https://instagram.com/',
			},
			{
				id: 3,
				name: 'Facebook',
				icon: <FiFacebook />,
				url: 'https://facebook.com/',
			},
			{
				id: 4,
				name: 'LinkedIn',
				icon: <FiLinkedin />,
				url: 'https://linkedin.com/',
			},
			{
				id: 5,
				name: 'Youtube',
				icon: <FiYoutube />,
				url: 'https://www.youtube.com/',
			},
		],
	},
	RelatedProject: {
		title: 'Related Projects',
		Projects: [
			{
				id: 1,
				title: 'SWIM IBM Internship',
				img: SWIMImage,
				link:'swim-project'
			},
			{
				id: 2,
				title: 'Clotzr | Online Shop',
				img: CLOTZRImage,
				link:'clotzr-project'
			},
			{
				id: 3,
				title: 'Kooch | Immigration Services',
				img: KOOCHImage,
				link:'kooch-project'
			},
		],
	},
};
