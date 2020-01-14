import React, { Component } from 'react'

class Showcase extends Component {
	render() {
		return (
			<div>
				
					{this.props.left == true ? <div><img src={this.props.url} className='showcase-img' alt=""/><div className='showcase-text-container' style={{textAlign:'center'}}><p className='showcase-title'>{this.props.title}</p><p className='showcase-description'>{this.props.description}</p></div></div> : <div><div className='showcase-text-container' style={{textAlign:'center'}}><p className='showcase-title'>{this.props.title}</p><p className='showcase-description'>{this.props.description}</p></div><img src={this.props.url} className='showcase-img' alt=""/></div>}
					
					
					
					
				</div>
		);
	}
}

export default Showcase;