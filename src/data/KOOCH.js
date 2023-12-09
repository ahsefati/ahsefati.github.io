// Import images
import Image1 from '../images/Webapps/Kooch_desktop.png';
import Image2 from '../images/web-project-2.jpg';
import Image3 from '../images/mobile-project-2.jpg';
import CLOTZRImage from '../images/Webapps/Clotzr_desktop.png';
import SWIMImage from '../images/Webapps/SWIM_desktop.png';
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
		title: 'KOOCH - Immigrate Easier, Cheaper, and Faster!',
		publishDate: 'Oct, 2021',
		tags: 'Backend / Frontend / Full-Stack',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Kabul Project Management UI',
			img: Image1,
		},
	],
	ProjectInfo: {
		ClientHeading: 'About Client',
		CompanyInfo: [
			{
				id: 1,
				title: 'KOOCH AI',
				details: 'An Immigration Services Company',
			},
			{
				id: 2,
				title: 'Services',
				details: 'Immgiration Tools such as CV Creator or Professor Finder.',
			},
			{
				id: 3,
				title: 'Website',
				details: 'https://panel.kooch.help',
			},
			{
				id: 4,
				title: 'Phone',
				details: '(+1) 403-708-3763',
			},
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			'Providing different tools that helps students immigrate easier, chapear, and faster! The tools are provided using different technologies, APIs and crawlers. The tools are offered for free.',
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'JavaScript',
					'React.js',
					'Node',
					'Express',
					'MongoDB',
					'JSX',
					'MaterialUI',
					'Hetzner'
				],
			},
		],
		ProjectDetailsHeading: 'Challenge',
		ProjectDetails: [
			{
				id: 1,
				details:
					"There are different premium-only websites that offer tools such as CV creation. However, the objective in this project was to build something for free which can help all the students meet their needs for free. I worked hard to achieve that goal while I was also studying master of computer science at the University of Calgary. I spent every single saturdays and sundays to develop these tools and I am happy that it's available now. Currently, more there are more than 1000 active users in the platform daily!",
			},
			{
				id: 2,
				details:
					'As a non-for-profit platform, it has been hard to optimize everything to reduce the maintenance and server costs. I tried my best to keep the codes simple and user-centric while usable and performance-optimized. I used MongoDB Atlas which offers free-tier. I used Hetzner as the cloud service which offers the best prices to my knowledge. For a comparison, AWS is 3 times more expencive than Hetzner.',
			},
			{
				id: 3,
				details:
					'Since it was a 2-year project built from scratch, I set up a continues development (CD) and continuous integration (CI) using GitHub actions which allows it for free. I use Docker for this purpose.',
			},
			{
				id: 4,
				details:
					'At the end, it is an honor to create something that can help others for free. I am satisfied with the results! Till now, around 500 cases claimed that they get their VISA with the help of KOOCH for different countries such as USA, Canada, Australia, Germany, etc.',
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
				title: 'Machine CODES',
				img: MACHINECODESImage,
				link:'machinecodes-project'
			},
		],
	},
};
