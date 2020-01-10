import React, { Component } from 'react';
import {Link} from 'react-router-dom';

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
		return (<nav style={{display:(this.state.show ? 'block' : 'none')}} className='nav'>
			<a href="/"><div className='nav-img-item'><img className='nav-img' src="https://cdn.discordapp.com/avatars/647218819865116674/30bf8360b8a5adef5a894d157e22dc34.png?size=512" alt=""/></div></a>
				<Link to='/commands'><div className='nav-item'>Commands</div></Link>
				<Link to='/search'><div className='nav-item'>Stats</div></Link>
				<Link to='/changelog'><div className='nav-item'>Changelog</div></Link>
				<a href='https://discordapp.com/api/oauth2/authorize?client_id=647218819865116674&permissions=0&scope=bot'><div className='nav-item right special'>Invite the bot</div></a>
		</nav>);
	}

	handleScroll(event) {
		
		const threshold = 100;
		if (window.pageYOffset > threshold) {
			this.setState({show:true});
		} else {
			this.setState({show:false});
		}
	}
}

export default NavBar;
