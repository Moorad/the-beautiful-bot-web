import React, { Component } from 'react'
import { Link } from 'react-router-dom';
class StaticNavBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			display:'none'
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
		return (
			<div>
			<div style={{height:'68px',display:this.state.display}}></div>
			<div className='nav' style={this.state.styles}>
				<a href="/"><div className='nav-img-item'><img className='nav-img' src="https://cdn.discordapp.com/avatars/647218819865116674/30bf8360b8a5adef5a894d157e22dc34.png?size=512" alt=""/></div></a>
				<Link to='/commands'><div className='nav-item'>Commands</div></Link>
				<Link to='/search'><div className='nav-item'>Stats</div></Link>
				<Link to='/changelog'><div className='nav-item'>Changelog</div></Link>
				<a href='https://discordapp.com/api/oauth2/authorize?client_id=647218819865116674&permissions=0&scope=bot'><div className='nav-item right special'>Invite the bot</div></a>
			</div>
			</div>
		)
	}

	handleScroll(event) {
		
		const threshold = 0;
		if (window.pageYOffset > threshold) {
			this.setState({styles:{position:'fixed',backgroundColor:'#242D47',padding:'0.5rem 1rem',top:0},display:'block'});
		} else {
			this.setState({styles:{position:'static',backgroundColor:'#141927',},display:'none'});
		}
		console.log(window.pageYOffset)
	}
}

export default StaticNavBar;