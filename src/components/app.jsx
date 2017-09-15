import React from 'react';
import {Counter} from './counter.jsx';

export class App extends React.Component {
	
	componentWillMount() {
		//do an Api call for some users    
	}


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