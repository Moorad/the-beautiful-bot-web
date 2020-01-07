import React, { Component } from 'react';

class NavBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false
		}
		this.handleScroll = this.handleScroll.bind(this)
	}

	componentDidMount() {
		window.addEventListener('scroll',this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll',this.handleScroll);
	}

	render() {
		return (<nav style={{display:(this.state.show ? 'block' : 'none')}} className='nav'></nav>);
	}

	handleScroll(event) {
		
		const threshold = 100;
		if (window.pageYOffset > threshold) {
			this.setState({show:true});
		} else {
			this.setState({show:false});
		}
		console.log(this.state);
	}
}

export default NavBar;
