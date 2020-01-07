import React, { Component } from 'react';

class Beatmap extends Component {
	// componentDidMount() {
	// 	fetch('')
	// }

	render() {
		return(
			<div className='tight-section'>
				<img className='beatmap-img' src="https://assets.ppy.sh/beatmaps/1078344/covers/cover@2x.jpg" alt=""/>
				<p className='title'>Beatmap Name</p>
				<p>Song Creator</p>
				<p>By Map Creator</p>
				<p>Stars: ★★★★★★★★★★ [8.12]</p>
			</div>
		);
	}

}



export default Beatmap;