// Import images
import Image1 from '../images/Webapps/Canis1_desktop.png';
import canis2 from '../images/Webapps/Canis2_desktop.png';

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
		title: 'CANIS: Canadian Network on Information & Security',
		publishDate: 'Mar, 2023',
		tags: 'Frontend / Machine Learning / API',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'CANIS: Canadian Network on Information & Security',
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
				details: 'https://fakeortrue.netlify.app',
			},
			{
				id: 4,
				title: 'Phone',
				details: '(+1) 825-365-7563',
			},
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			'To learn practical concepts on data analysis in a competetive environment, I attended this hackathon in March 2023. I won the first prize ($4000) while developing an interactive data visualization of the given dataset.',
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
				],
			},
		],
		ProjectDetailsHeading: 'Challenge',
		ProjectDetails: [
			{
				id: 1,
				details:
					"I started the hackathon by reading the given dataset in general. Then, it was time to think out of the box. I found out that there are similar patterns between the fake news. Then, I applied different algorithms to find the patterns automatically. I created a list of 12 different patterns that seem to be possible to extract.",
			},
			{
				id: 2,
				details:
					'Then, I performed various extensive experiments for each of the patterns and reported the results in an interactive way. The plots are mostly interactive and they are made by Plotly library implemented in JavaScript. I started the React.js application and worked on the visualizations and reports.',
			},
			{
				id: 3,
				details:
					'After that part, we used a Passive/Aggressive classifier to create a model which can identify if the input (which, obviously, is NOT repeated in the dataset) is fake or true. After tuning the model and when the accuracy was good enough (~95%), I deployed the final model on the cloud and create an endpoint (API) to use it in the web application.',
			},
			{
				id: 4,
				details:
					'Finally, I created the user interface for the second part of the application (trying our model) which gets an input and tells if it is fake or true! It has an amazing performance, you can try it yourself!'
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
				title: 'Foreign Interference Data Analysis and Visualization',
				img: canis2,
				link:'canis2-project'
			},
		],
	},
};
