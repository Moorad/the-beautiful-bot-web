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
			<div>The Beatmap command shows you the stats of the specified map</div>
			<p className='sub-title'>$recent [Username] or $rs [Username]</p>
			<div>Available arguments: -p [previous play number]</div>
			<div>(Note the -p argument is optional)</div>
			<div>The recent command shows you the stats of the most recent play/s</div>
			<p className='sub-title'>$osurename [Username] or $or [Username]</p>
			<div>The rename command will change the osu account linked with your discord.</div>
			<p className='title'>---- General ----</p>
			<p className='sub-title'>$help or $hl</p>
			<div>The help commands will display this command list</div>
			<p className='sub-title'>$cat</p>
			<div>:)</div>
			<p className='sub-title'>$changelog [Number of commits (optional)] or $cl [Number of commits (optional)]</p>
			<div>The changelog command shows the latest specified number of commits and merges (5 if no number was given) on the beautiful bot's repo</div>
		</div>);
	}
}

export default Commands;