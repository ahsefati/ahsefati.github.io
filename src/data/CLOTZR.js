// Import images
import Image1 from '../images/Webapps/Clotzr_desktop.png';
import KoochImage from '../images/Webapps/Kooch_desktop.png';
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
		title: 'Clotzr | E-Shop Featuring Pre-Sell in France',
		publishDate: 'September, 2023',
		tags: 'Frontend / Backend / Full-Stack',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Remote - France - Contract',
			img: Image1,
		},
	],
	ProjectInfo: {
		ClientHeading: 'About Client',
		CompanyInfo: [
			{
				id: 1,
				title: 'Clotzr',
				details: 'Web-Application for an Ecommerce Online Shop in France.',
			},
			{
				id: 2,
				title: 'Services',
				details: 'Online Shop - Innovative Pre-Sell Feature.',
			},
			{
				id: 3,
				title: 'Website',
				details: 'https://clotzr.com',
			},
			{
				id: 4,
				title: 'Phone',
				details: '(+1) 415-770-2770',
			},
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			'Sell before you buy! That was the first thing Maxime said as the CEO of the company. This feature helps people to buy clothes and accessories only when they are sure that they can sell them as a second-hand thing. This also helps our planet by lowering the carbon footprint!',
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'AWS S3',
					'AWS Amplify',
					'JavaScript',
					'React and Next',
					'Stripe APIs',
					'Shopify APIs'
				],
			},
		],
		ProjectDetailsHeading: 'Challenge',
		ProjectDetails: [
			{
				id: 1,
				details:
					"I was involved throughout the entire software life-cycle process in this project. From design thinking to user experience and user interface styling, I worked throughly.",
			},
			{
				id: 2,
				details:
					'Additionally, I had the chance to work with two other developers on this project. Designing and implementing the ideas using the latest available technologies such as NextJS, Tailwind, Shopify APIs, Stripe APIs, etc.',
			},
			{
				id: 3,
				details:
					"This platform suggests a fully integrated experience from buying a product from a brand's website to pre-selling it using Clotzr. Generally, this is designed to work with all different possible scenarios and it is also scalble.",
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
				title: 'KOOCH | Immigration Services',
				img: KoochImage,
				link: 'kooch-project'
			},
			{
				id: 3,
				title: 'Machine CODES',
				img: MACHINECODESImage,
				link: 'machinecodes-project'
			},
		],
	},
};
