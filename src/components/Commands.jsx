import React, { Component } from 'react'

class Commands extends Component {
	constructor() {
		super();
		document.documentElement.scrollTop = 0;
		document.body.scrollTop = 0;
	}
	render() {
		
		return (<div className='tight-section'>
			<p className='title'>---- osu! ----</p>
			<p className='sub-title'>$osuset [Username] or $os [Username]</p>
			<div>The osuset command will link your discord with your osu account which will be used in other osu commands
			$osu [Username]</div>
			<p className='sub-title'>$osu [Username]</p>
			<div>The user command displays the stats of the specified user. if no osu username is specified then the username linked with account will be used (refer to $osuset)</div>
			<p className='sub-title'>$best or $bt</p>
			<div>The best command displays top 5 plays of the specified user. if no osu username is specified then the username linked with account will be used (refer to $osuset)</div>
			<p className='sub-title'>$map [Beatmap name or beatmap id] or $mp [Beatmap name or beatmap id]</p>
			The Beatmap command shows you the stats of the specified map
			$recent -p [previous play number] [Username] or $rs -p [previous play number] [Username]
			(Note the -p argument is optional)The recent command shows you the stats of the most recent play/s
			$osurename [Username] or $or [Username]
			The rename command will change the osu account linked with your discord.
			---- General ----
			$help or $hl
			The help commands will display this command list
			$cat
			:)
			$changelog [Number of commits (optional)] or $cl [Number of commits (optional)]
			The changelog command shows the latest specified number of commits and merges (5 if no number was given) on the beautiful bot's repo
		</div>)
	}
}

export default Commands