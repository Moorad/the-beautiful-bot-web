import React, { Component } from 'react'

class Showcase extends Component {
	render() {
		return (
			<div>
					<p>{this.props.title}</p>
					<img src={this.props.url} alt=""/>
					<p>{this.props.description}</p>
				</div>
		);
	}
}

export default Showcase;