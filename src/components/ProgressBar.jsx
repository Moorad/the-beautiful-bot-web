import React, { Component } from 'react'

class ProgressBar extends Component {
	constructor(props) {
		super(props);
		console.log(this.props)
		this.state = {
			max:this.props.max,
			min:this.props.min,
			value:this.props.value
		}
		console.log((100/this.state.value)+'%')
	}

	render() {
		return(
			<div className='progress-bar-container'>
				<div class='progress-bar' style={{width:(100*((this.state.value - this.state.min)/(this.state.max - this.state.min)))+'%'}}></div>
			</div>
		);
	}


}

export default ProgressBar;