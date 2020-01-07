import React, { Component } from 'react';

class Beatmap extends Component {
	constructor() {
		super();
		this.state = {};
	}

	componentDidMount() {
		var server = 'http://localhost:5000';
		var urlParams = new URLSearchParams(window.location.search);
		console.log(process.env)
		fetch(`${server}/api/beatmap?osukey=${process.env.REACT_APP_OSU_KEY}&bsetid=${urlParams.get('bsetid')}`, {
			method:'GET'
		}).then(res => res.json())
		.then(json => {
			console.log(json[0]);
			this.setState(json[0])
		});

		fetch(`${server}/api/colours?link=${`https://assets.ppy.sh/beatmaps/${urlParams.get('bsetid')}/covers/cover@2x.jpg`}`,{method:'GET'}).then(res => res.json()).then(json => {
			console.log(json)
			// document.body.style.backgroundColor = json.background;
			document.body.style.color = json.foreground;
			document.getElementsByClassName('beatmap-img')[0].style.borderColor = json.foreground;

		});

		
		console.log(`${server}?osukey=${process.env.REACT_APP_OSU_KEY}&bsetid=${urlParams.get('bsetid')}`)
	}

	render() {
		return(
			<div className='tight-section'>
				<img className='beatmap-img' src={`https://assets.ppy.sh/beatmaps/${this.state.beatmapset_id}/covers/cover@2x.jpg`} alt=""/>
				<p className='title'>{this.state.title}</p>
				<p>Song Creator</p>
				<p>By Map Creator</p>
				<p>Stars: ★★★★★★★★★★ [8.12]</p>
			</div>
		);
	}

}



export default Beatmap;