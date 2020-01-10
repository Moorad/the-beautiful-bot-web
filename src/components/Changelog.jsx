import React, { Component } from 'react';
import Loader from './Loader';

class Changelog extends Component {
	constructor() {
		super();
		this.state = {
			loading:true
		};
	}

	componentDidMount() {
		fetch(`${process.env.REACT_APP_SERVER}/api/changelog`, {
			method: 'GET'
		}).then(res => res.json())
			.then(json => {
				console.log(json);
				json.date = new Date(json.date);
				json.date = ((json.date.getDate() > 9) ? json.date.getDate() : ('0' + json.date.getDate())) + '/' + ((json.date.getMonth() > 8) ? (json.date.getMonth() + 1) : ('0' + (json.date.getMonth() + 1))) + '/' + json.date.getFullYear()
				json.loading = false;
				this.setState(json);
			});
	}
	render() {
		if (this.state.loading) {
			return <Loader/>;
		}
		return (
			<div className='tight-section'>
				<p className='title center'>The Beautiful Bot</p>
				<p>{this.state.date} ({this.state.ago})</p>
				<p>{this.state.commit}</p>
		{this.state.details.map((detail,i) => (<p>{detail}</p>))}
				<p className='center'></p>
				<p></p>
				<p className='title center'>Website</p>

				<p className='title center'>API</p>
			</div>
		)
	}
}

export default Changelog;