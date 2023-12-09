// Import images
import Image1 from '../images/Webapps/SWIM_desktop.png';
import CLOTZRImage from '../images/Webapps/Clotzr_desktop.png';
import KOOCHImage from '../images/Webapps/Kooch_desktop.png';
import MACHINECODESImage from '../images/Webapps/MachineCodes_desktop.png';
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
		title: 'Sustainable Watershed Integrated Management (SWIM)',
		publishDate: 'Jul 26, 2021',
		tags: 'Backend / Frontend / Full-Stack',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Sustainable Watershed Integrated Management (SWIM)',
			img: Image1,
		},
	],
	ProjectInfo: {
		ClientHeading: 'About Client',
		CompanyInfo: [
			{
				id: 1,
				title: 'IBM - Mitacs - University of Calgary',
				details: 'Partnering to Complete the ACWA Project',
			},
			{
				id: 2,
				title: 'Services',
				details: 'UI Design, Frontend, Backend & Database Development',
			},
			{
				id: 3,
				title: 'Website',
				details: 'https://swim-watershed.ucalgary.ca',
			},
			{
				id: 4,
				title: 'Phone',
				details: '(+1) 403-220-6790',
			},
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			'Creating a single point of truth for the data collected from devices in the watersheds. I helped IBM and University of Calgary to get to their goals by developing the required web-application.',
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'HTML',
					'CSS',
					'JavaScript',
					'React.js',
					'Flask',
					'MySQL',
					'IBM DB2',
					'JSX',
					'AntD',
					'Apache'
				],
			},
		],
		ProjectDetailsHeading: 'Challenge',
		ProjectDetails: [
			{
				id: 1,
				details:
					'The first challenge was designing a formal but modern web interface to be easily used by both the academics (such as the unviersity of Calgary faculty) and the professionals (such as IBMers) was the first challenge. I chose AntD library to be used in the React development process. The result proves that AntD components are formal and perfectly algined with our need.',
			},
			{
				id: 2,
				details:
					'On the backend, stability as well as fast-development was the biggest challenge. We used Flask to develope the end-points while using the latest libraries in order to make the platform safe and secure. While Django was another option, from the first stage of development, I figured out that the IBM DB2 driver for Django is not updated in a while.',
			},
			{
				id: 3,
				details:
					'Another challenge was the operating system installed in the University of Calgary data centers. I was not familiar with Red Hat at first but I managed to get familiar with it throughout the first week of our internship.',
			},
			{
				id: 4,
				details:
					'At the end, it was an honor to be suprevised by Marcellus Mindel, the head of advance studies at IBM Canada as well as Prof. Leland Jackson, a highly respected professor at the University of Calgary.',
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
				title: 'Machine Codes | Auto Generated Codes for UI',
				img: MACHINECODESImage,
				link: 'machinecodes-project'
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
