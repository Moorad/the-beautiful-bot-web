import React, { Component } from 'react';
import ProgressBar from './ProgressBar';
class Beatmap extends Component {
	constructor() {
		super();
		this.state = {loading:true};
	}

	componentDidMount() {
		var server = 'http://localhost:5000';
		var urlParams = new URLSearchParams(window.location.search);
		console.log(process.env)
		fetch(`${server}/api/beatmap?osukey=${process.env.REACT_APP_OSU_KEY}&bsetid=${urlParams.get('bsetid')}`, {
			method: 'GET'
		}).then(res => res.json())
			.then(json => {
				console.log(json[0]);
				json[0].loading = false;
				this.setState(json[0])
			});

		fetch(`${server}/api/colours?link=${`https://assets.ppy.sh/beatmaps/${urlParams.get('bsetid')}/covers/cover@2x.jpg`}`, { method: 'GET' }).then(res => res.json()).then(json => {
			console.log(json)
			document.body.style.backgroundColor = json.background;
			document.body.style.color = json.foreground;
			document.getElementsByClassName('beatmap-img')[0].style.borderColor = json.foreground;
			for (var i = 0;i < document.getElementsByClassName('progress-bar').length;i++) {
				document.getElementsByClassName('progress-bar')[i].style.background = json.foreground;
				document.getElementsByClassName('progress-bar-container')[i].style.background = json.foreground+'33';
			}

		});


		console.log(`${server}?osukey=${process.env.REACT_APP_OSU_KEY}&bsetid=${urlParams.get('bsetid')}`)
	}

	render() {
		if (this.state.loading) {
			return <div></div>
		}
		return (
			<div className='tight-section'>
				<img className='beatmap-img' src={`https://assets.ppy.sh/beatmaps/${this.state.beatmapset_id}/covers/cover@2x.jpg`} alt="" />
				<p className='beatmap-title'>{this.state.title}</p>
				<p className='beatmap-sub-title'>By {this.state.artist}</p>
				<p className='beatmap-sub-title'>Mapped by {this.state.creator}</p>
		<p className='beatmap-sub-title'>Stars: ★★★★★★★★★★ [{this.state.difficultyrating}]</p>
		<div className='beatmap-sub-title'>CS: <ProgressBar max={7} min={2} value={this.state.diff_size} /> [{this.state.diff_size}]</div>
		<div className='beatmap-sub-title'>AR: <ProgressBar max={10} min={0} value={this.state.diff_approach}/> [{this.state.diff_approach}]</div>
		<div className='beatmap-sub-title'>HP: <ProgressBar max={10} min={0} value={this.state.diff_drain}/> [{this.state.diff_drain}]</div>
		<div className='beatmap-sub-title'>OD: <ProgressBar max={10} min={0} value={this.state.diff_overall}/> [{this.state.diff_overall}]</div>
			</div>
		);
	}

}



export default Beatmap;