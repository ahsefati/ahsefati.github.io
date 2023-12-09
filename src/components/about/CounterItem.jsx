import React from 'react';

const CounterItem = ({ title, counter, measurement }) => {
	return (
		<div className="mt-10 mb-10 sm:mb-5 sm:mt-5">
			<h2 className="text-3xl text-center text-secondary-dark dark:text-secondary-light mb-2">
				{counter} {measurement}
			</h2>
			<span className="font-general-regular block text-md text-center text-ternary-dark dark:text-ternary-light">
				{title}
			</span>
		</div>
	);
};

export default CounterItem;
