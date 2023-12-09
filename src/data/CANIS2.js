// Import images
import Image1 from '../images/Webapps/Canis2_desktop.png';
import canis1Image from '../images/Webapps/Canis1_desktop.png';

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
		title: 'Foreign Interference Data Analysis and Visualization',
		publishDate: 'Mar, 2023',
		tags: 'Frontend / Machine Learning / API / Data Visualization',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Foreign Interference Data Analysis and Visualization',
			img: Image1,
		},
	],
	ProjectInfo: {
		ClientHeading: 'About Client',
		CompanyInfo: [
			{
				id: 1,
				title: 'CANIS',
				details: 'A Canadian Hackathon on Data Science and Visualization.',
			},
			{
				id: 2,
				title: 'Services',
				details: 'Data Analysis and Visualization. Interactive UI Development.',
			},
			{
				id: 3,
				title: 'Website',
				details: 'https://chinaimpact.netlify.app',
			},
			{
				id: 4,
				title: 'Phone',
				details: '(+1) 825-365-7563',
			},
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			'To learn practical concepts on data analysis in a competetive environment, I attended this hackathon in November 2023. I won the best performance on visualization prize ($3500) while developing an interactive data visualization of the given dataset.',
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'Machine Learning',
					'ML Model Deployment',
					'FastAPI',
					'JavaScript',
					'React.js',
					'JSX',
					'Flask',
					'Netlify',
					'Tableau'
				],
			},
		],
		ProjectDetailsHeading: 'Challenge',
		ProjectDetails: [
			{
				id: 1,
				details:
					"Throughout this hackathon, we analyzed several different aspects of the given dataset. Additionally, we used scraping libraries (selenuim) using Python to extract more information about accounts on different platforms, specially Twitter.",
			},
			{
				id: 2,
				details:
					'Overall, this analysis is about a dataset profiling various entities, primarily focusing on their social media presence across different regions and languages. It aims to understand the influence and reach of these entities, providing insights into their audience engagement.',
			},
			{
				id: 3,
				details:
					"In conclusion, we can see a high-scale effort from China to globally affect others' opinions by creating different accounts with a focus on different countries with various languages. Canadians are one of the main targets of China's influence in different areas. However, the results of these campaigns seem to not be satisfactory, as we found really low engagement from real users on the content that is published by the Chinese state-controlled media or their actors.",
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
				title: 'CANIS: Canadian Network on Information & Security',
				img: canis1Image,
				link: 'canis-project'
			}
		],
	},
};
