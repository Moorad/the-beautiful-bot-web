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
		var lastStar;
		for (var i = 0;i < Math.floor(this.state.stars);i++) {
			array.push(i);
		}
		console.log(this.state.stars - Math.floor(this.state.stars))
		if (Math.floor(this.state.stars) < this.state.stars) {
			if (this.state.stars - Math.floor(this.state.stars) < 0.35) {
				lastStar = <Star className='star star25'  index={Math.floor(this.state.stars)}/>;
			} else if (this.state.stars - Math.floor(this.state.stars) < 0.60) {
				lastStar = <Star className='star star50' index={Math.floor(this.state.stars)}/>;
			} else {
				lastStar = <Star className='star star75' index={Math.floor(this.state.stars)}/>;
			}
		}
	return (
	<div className='star-container'>
		{array.map((elem,i) => <Star className='star star100' index={i} key={i}/>)}
		{lastStar}
	</div>);
	}
}

class Star extends Component {
	constructor(props) {
		super(props);
		this.state = {
			render:<div></div>,
			time:this.props.index*50,
			classes:this.props.className
		};
	}

	componentWillReceiveProps(newProps) {
		if (newProps != this.props) {
			this.setState({
				time:newProps.time,
				classes:newProps.classes
			})
		}
	}

	componentDidMount() {
			this.setState({render:<div className={this.state.classes}><i class="fas fa-star"></i></div>});
	}

	render() {
		return (this.state.render);
	}
}

export default StarBar;