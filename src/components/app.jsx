import React from 'react';
import {Counter} from './counter.jsx';

export class App extends React.Component {
	render() {
		return ( 
			<div>
				<Counter id="test1" />
				<Counter id="test2" />
				<Counter id="test3" />
			</div>
		);
	} 
}