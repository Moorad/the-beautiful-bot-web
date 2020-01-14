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
				var data = {data:json}
				data.data.date = new Date(json.date);
				data.data.date = ((json.date.getDate() > 9) ? json.date.getDate() : ('0' + json.date.getDate())) + '/' + ((json.date.getMonth() > 8) ? (json.date.getMonth() + 1) : ('0' + (json.date.getMonth() + 1))) + '/' + json.date.getFullYear()
				data.loading = false;
				this.setState(data);
			});
	}
	render() {
		if (this.state.loading) {
			return <Loader/>;
		}
		return (
			<div className='tight-section'>
				<p className='title'>Changelog</p>
				<p className='sub-title'>The Beautiful Bot</p>
				<p>{this.state.data[0].commitType ? <i class="fas fa-code-branch"></i> : <i class="fas fa-file-import"></i>} {this.state.data[0].commit}</p>
				<p>{this.state.data[0].date} ({this.state.data[0].ago})</p>
				{this.state.data[0].details.map((detail,i) => (<p>{detail}</p>))}
				<p className='sub-title'>Website</p>
				<p>{this.state.data[1].commitType ? <i class="fas fa-code-branch"></i> : <i class="fas fa-file-import"></i>} {this.state.data[1].commit}</p>
				<p>{this.state.data[1].date} ({this.state.data[1].ago})</p>
				{this.state.data[1].details.map((detail,i) => (<p>{detail}</p>))}
				<p className='sub-title'>API</p>
				<p>{this.state.data[2].commitType ? <i class="fas fa-code-branch"></i> : <i class="fas fa-file-import"></i>} {this.state.data[2].commit}</p>
				<p>{this.state.data[2].date} ({this.state.data[2].ago})</p>
				{this.state.data[2].details.map((detail,i) => (<p>{detail}</p>))}
			</div>
		)
	}
}

export default Changelog;