import React from 'react';
import Card from './Card';
import useConunter from '../hooks/use-counter';

const ForwardCounter = () => {
	const counter = useConunter()

	return <Card>{counter}</Card>;
};

export default ForwardCounter;
