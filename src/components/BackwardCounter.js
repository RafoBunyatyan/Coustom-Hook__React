import React from 'react';
import Card from './Card';
import useConunter from '../hooks/use-counter';

const BackwardCounter = () => {
	const counter = useConunter(false)

	return <Card>{counter}</Card>;
};

export default BackwardCounter;
