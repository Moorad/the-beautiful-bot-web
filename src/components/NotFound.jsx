import React from 'react'
import SVGFile from '../404.svg'

function NotFound() {
	return (
		<div className='section'>
			<img className='not-found-img' style={{display:'block',margin:'auto'}} src={SVGFile} alt=""/>
			<div className='title center'>HELP REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE!<br/>404 Not Found</div>
					<a href="/"><button className='sub-title special nav-item ' style={{display:'block',margin:'auto'}}>LEAVE AREA 51</button></a>
		</div>
	);
}

export default  NotFound;