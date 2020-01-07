import React, { Component } from 'react'
import { Link } from 'react-router-dom';
class StaticNavBar extends Component {
	render() {
		return (
			<div className='static-nav'>
				<div className='nav-item current'>Home</div>
				<Link to='/commands'><div className='nav-item'>Commands</div></Link>
				<Link to='/search'><div className='nav-item'>Stats</div></Link>
				<Link to='/changelog'><div className='nav-item'>Changelog</div></Link>
				<a href='https://discordapp.com/api/oauth2/authorize?client_id=647218819865116674&permissions=0&scope=bot'><div className='nav-item right special'>Invite the bot</div></a>
			</div>

		)
	}
}

export default StaticNavBar;