import React, { Component } from 'react'

class Footer extends Component {
	render() {
		return (
			<div className='footer'>
				<div className='created-by center'>
					<img src="https://i.imgur.com/LhcenlS.jpg" alt=""/><p>Made with ❤ by Moorad</p>
				</div>
				<div className='footer-section'>
					<ul>
					<li className='footer-title'>Development</li>
					<li>This project was a really fun little project. Node.js is not really my expertise so this discord bot was a bit of a rollercoster for me at first but I learned and aquired a lot of useful skills including knowledge about node.js. Creating websites and web development is what I'm better at and making a website for the bot was one of the earliest goals that I set for this project and here I am.</li>
					</ul>
				</div>

				<div className='footer-section'>
					<ul>
					<li className='footer-title'>Source Code</li>
					<a href="https://github.com/Moorad/the-beautiful-bot"><li>The Beautiful Bot repository</li></a>
					<a href="https://github.com/Moorad/the-beautiful-bot-web"><li>TBB website repository</li></a>
					<a href="https://github.com/Moorad/the-beautifu-bot-api"><li>TBB api repository</li></a>
					</ul>
				</div>
				<div className='footer-section'>
					<ul>
						<li className='footer-title'>API</li>
						<a href=""><li>API Documentation</li></a>
					</ul>
				</div>
				<div className='footer-bottom'>
					<a href="">[Github]</a>
					<a href="">[Osu]</a>
					<a href="">[Discord]</a>
					<a href="">[Email]</a>
				</div>
			</div>
		)
	}
}

export default Footer;