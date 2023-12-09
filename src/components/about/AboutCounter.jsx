import { useCountUp } from 'react-countup';
import CounterItem from './CounterItem';

const AboutCounter = () => {
	useCountUp({ ref: 'experienceCounter', end: 4, duration: 2 });
	useCountUp({ ref: 'githubStarsCounter', end: 650, duration: 2 });

	return (
		<div className="mt-5 sm:mt-5 bg-primary-light dark:bg-ternary-dark shadow-sm">
			<div className="font-general-medium">
				<CounterItem
					title="Years of experience"
					counter={<span id="experienceCounter" />}
					measurement=""
				/>
				
				<CounterItem
					title="Reputation on StackOverFlow"
					counter={<span id="githubStarsCounter" />}
					measurement="+"
				/>
			</div>
		</div>
	);
};

export default AboutCounter;
