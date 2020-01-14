import React, { Component } from 'react'

class PopUp extends Component {
	render() {
		return (<div className='popup' style={{backgroundColor:'#E30E3F'}}>
			{/* The API seems to be down! Well maybe, check the <a href='https://google.com' style={{margin:0,color:'#f7cad2',textDecoration:'underline'}}>API status</a> to see whether the issue is from your side or my side */}
	<p><i class="far fa-surprise fa-lg"></i> {this.props.value}</p>
		</div>);
	}
}

export default PopUp;