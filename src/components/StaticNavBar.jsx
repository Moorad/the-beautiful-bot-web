import React, { Component } from 'react'
import { Link } from 'react-router-dom';
class StaticNavBar extends Component {
	render() {
		return (
			<div className='static-nav'>
				<div className='nav-item'><Link to='/user'>Home</Link></div>
				<div className='nav-item'><Link to='/user'>Commands</Link></div>
				<div className='nav-item'><Link to='/user'>Stats</Link></div>
				<div className='nav-item'><Link to='/user'>Changelog</Link></div>
			</div>

		)
	}
}

export default StaticNavBar;