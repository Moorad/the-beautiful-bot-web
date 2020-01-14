import React, { Component } from 'react';

class SearchBar extends Component {
	constructor() {
		super();
		this.state = {
			type:0,
		}
		this.handlePlayerClick = this.handlePlayerClick.bind(this);
		this.handleBeatmapClick = this.handleBeatmapClick.bind(this);
		this.handleKeyDown = this.handleKeyDown.bind(this);
		document.documentElement.scrollTop = 0;
		document.body.scrollTop = 0;

	}
	render() {
		return(
			<div className='tight-section'>
				<div className='search-container'>
				<button className={'search-option '+(this.state.type === 0 ? 'beatmap-active' : '')} onClick={this.handleBeatmapClick}>Beatmap</button>
				<button className={'search-option '+(this.state.type === 1 ? 'player-active' : '')} onClick={this.handlePlayerClick}>Player</button>
				</div>
				<input className='search-bar player' type="text" style={{borderColor:(this.state.type == 0 ? '#6d83ff' : '#ffd16d')}} placeHolder={(this.state.type == 0 ? 'Beatmap URL e.g. https://osu.ppy.sh/beatmapsets/41823#osu/131891' : 'Username or User ID e.g. Vaxei')} onKeyDown={this.handleKeyDown}/>
			</div>
		);
	}

	handleBeatmapClick() {
		if (this.state.type === 1) {
			this.setState({type:0});
		}
	}

	handlePlayerClick() {
		if (this.state.type === 0) {
			this.setState({type:1});
		}
	}

	handleKeyDown(event) {
		if (event.key === 'Enter') {
			if (this.state.type == 0) {
			console.log(event.target.value);
			var bset = event.target.value.replace('https://osu.ppy.sh/beatmapsets/','');
			bset = bset.slice(0,bset.indexOf('#osu'));
			window.location.href = '/beatmap?bsetid='+bset;
			} else {
				console.log(event.target.value);
				var user = event.target.value.replace('https://osu.ppy.sh/users/','');
				window.location.href = '/player?user='+user;
			}
		}

	}
}

export default SearchBar;