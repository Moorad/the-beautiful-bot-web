import React, { Component } from 'react'

class Showcase extends Component {
	render() {
		return (
			<div>
				<div className='showcase-text-container'>
					<p className='showcase-title'>{this.props.title}</p>
					<p className='showcase-description'>{this.props.description}</p>
					</div>
					<img src={this.props.url} className='showcase-img' alt=""/>
					
				</div>
		);
	}
}

export default Showcase;