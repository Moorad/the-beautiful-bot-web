import React, { Component } from 'react'

class ProgressBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			max:this.props.max,
			min:this.props.min,
			value:this.props.value
		}
	}

	componentWillReceiveProps(nextProps) {
		if (this.props !== nextProps) {
			this.setState({
				max:this.props.max,
				min:this.props.min,
				value:this.props.value
			});
		}
	}

	render() {
		return(
			<div className='progress-bar-container'>
				<div className='progress-bar' style={{width:(100*((this.state.value - this.state.min)/(this.state.max - this.state.min)))+'%'}}></div>
			</div>
		);
	}


}

export default ProgressBar; 