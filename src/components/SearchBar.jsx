import React, { Component } from 'react';

class SearchBar extends Component {

	render() {
		return(
			<div className='tight-section'>
				<div className='search-option'>Player</div><div className='search-option'>Beatmap</div>
				<input className='search-bar player'type="text" onKeyDown={this.handleKeyDown}/>
			</div>
		);
	}

	handleKeyDown(event) {
		if (event.key == 'Enter') {
			console.log(event.target.value);
			var bset = event.target.value.replace('https://osu.ppy.sh/beatmapsets/','');
			bset = bset.slice(0,bset.indexOf('#osu'));
			window.location.href = '/beatmap?bsetid='+bset;
		}

	}
}

export default SearchBar;