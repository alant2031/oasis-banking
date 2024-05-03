'use client';

import React from 'react';
import CountUp from 'react-countup';

interface IProps {
	amount: number;
}

function AnimatedCounter({ amount }: IProps) {
	return (
		<div className="w-full">
			<CountUp
				end={amount}
				decimal=","
				separator="."
				prefix="R$"
				decimals={2}
			/>
		</div>
	);
}

export default AnimatedCounter;
