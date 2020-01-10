import React, { Component } from 'react'

class StarBar extends Component {
	constructor(props) {
		super(props);
		this.state = {stars:this.props.stars};
	}

	componentWillReceiveProps(newProps) {
		if (this.props !== newProps) {
			console.log(newProps)
			this.setState({stars:newProps.stars});
		}
	}

	render() {
		console.log('rendered')
		var array = [];
		for (var i = 0;i < this.state.stars;i++) {
			array.push(i);
		}
		console.log(this.state.stars)
	return (
	<div className='star-container'>
		{array.map((elem,i) => <Star index={i} key={i}/>)}
	</div>);
	}
}

class Star extends Component {
	constructor(props) {
		super(props);
		this.state = {
			render:<div></div>,
			time:this.props.index*50
		};
	}

	componentDidMount() {
		setTimeout(function() {
			this.setState({render:<div className='star'><i class="fas fa-star"></i></div>});
		}.bind(this),this.state.time)
	}

	render() {
		return (this.state.render);
	}
}

export default StarBar;