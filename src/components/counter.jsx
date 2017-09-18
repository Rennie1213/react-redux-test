import React from 'react';
import {connect} from 'react-redux';
import {
	createCounter,
	incrementCounter,
	decrementCounter,
	fetchCounter,
	selectCount
} from '../store/counter';

class _Counter extends React.Component {
	componentWillMount() {
		this.props.create(this.props.id);

		this.props.fetch();
	}

	render() {
		return ( 

			<div>
				<h2>{this.props.count}</h2>

				<button onClick={event => this.props.increment(this.props.id)} type="button">+</button> 
				<button onClick={event => this.props.decrement(this.props.id)} type="button">-</button> 
			</div>
		);
	} 
}

export const Counter = connect(
	(state, props) =>  {
		return {
			count: selectCount(state, props.id)
		};
	},
	(dispatch, props) =>  {
		return {
			fetch: id => {
				dispatch(fetchCounter())
			},
			create: id => {
				dispatch(createCounter(id))
			},
			increment: (id) => {
				dispatch(incrementCounter(id));
			},
			decrement: (id) => {
				dispatch(decrementCounter(id));
			}
		};
	}
)(_Counter);