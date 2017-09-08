import React from 'react';
import {connect} from 'react-redux';
import {
	incrementCounter,
	decrementCounter,
	selectCounter
} from '../store/counter';

class _App extends React.Component {
	render() {
		return ( 
			<div>
				<h2>{this.props.counter}</h2>

				<button onClick={this.props.increment} type="button">+</button> 
				<button onClick={this.props.decrement} type="button">-</button> 
			</div>
		);
	} 
}

export const App = connect(
	(state, props) =>  {
		return {
			counter: selectCounter(state)
		};
	},
	(dispatch, props) =>  {
		return {
			increment: () => {
				dispatch(incrementCounter());
			},
			decrement: () => {
				dispatch(decrementCounter());
			}
		};
	}
)(_App);
