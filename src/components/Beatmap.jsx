import React, { Component } from 'react';
import { Line, Pie } from 'react-chartjs-2';
import ProgressBar from './ProgressBar';
import Loader from './Loader';
import StarBar from './StarBar';
import PopUp from './PopUp';
class Beatmap extends Component {
	constructor() {
		super();
		this.state = { loading: true, colours: { background: '#ff0000', foreground: '#ffffff' },error:''};
		this.data = {};
		this.approved = ['graveyard', 'WIP', 'pending', 'ranked', 'approved', 'qualified', 'loved']
		this.changeDifficulty = this.changeDifficulty.bind(this);
	}

	componentDidMount() {
		var urlParams = new URLSearchParams(window.location.search);
		fetch(`${process.env.REACT_APP_SERVER}/api/beatmap?osukey=${process.env.REACT_APP_OSU_KEY}&bsetid=${urlParams.get('bsetid')}`, {
			method: 'GET'
		}).then(res => res.json())
			.then(json => {
				if (json.error) {
					this.setState({error:json.error});
					return;
				}
				console.log(json);
				this.data = json;
				json[0].loading = false;
				json[0].diffs = [];
				var sortedDiff = [];
				for (var i of json) {
					json[0].diffs.push(i.version);
					sortedDiff.push(i.difficultyrating);
				}

				// sortedDiff = sortedDiff.sort();
				// for (var i = 0;i < json[0].diffs.length;i++) {
				// 	for (var j = 0;j < sortedDiff.length;j++) {
				// 		if (sortedDiff[i] == json[j].difficultyrating) {
				// 			sortedDiff[i] = json[j].version;
				// 			break;
				// 		}
				// 	}
				// }
				// json[0].diffs = sortedDiff;
				// console.log(sortedDiff)
				json[0].diffColour = ''
				if (json[0].difficultyrating < 2) {
					json[0].diffColour = '#ABE21F';
				} else if (json[0].difficultyrating < 2.7) {
					json[0].diffColour = '#66DBFF';
				} else if (json[0].difficultyrating < 4) {
					json[0].diffColour = '#FFD819';
				} else if (json[0].difficultyrating < 5.3) {
					json[0].diffColour = '#FF5BB0';
				} else if (json[0].difficultyrating < 6.5) {
					json[0].diffColour = '#845BFF';
				} else {
					json[0].diffColour = '#000000';
				}

				for (var i = 0; i < json[0].deltaTime.length; i++) {
					json[0].deltaTime[i] = Math.floor(json[0].deltaTime[i] / 1000) + ' sec';
					json[0].aim[i] = Math.floor(json[0].aim[i] * 10) / 10
					json[0].speed[i] = Math.floor(json[0].speed[i] * 10) / 10
				}
				console.log(json)
				this.setState(json[0]);
				this.colours();
			});
	}

	render() {
		if (this.state.error != '') {
			return(<div><PopUp value={this.state.error}/><div className='section'></div></div>)
		}
		if (this.state.loading) {
			return <Loader />;
		}
		var data = (canvas) => {
			const ctx = canvas.getContext('2d')
			const gradient = ctx.createLinearGradient(0, 0, 0, 300);
			gradient.addColorStop(0, this.state.colours.foreground + 'FF');
			gradient.addColorStop(1, this.state.colours.foreground + '00');
			const secondGradient = ctx.createLinearGradient(0, 0, 0, 300);
			secondGradient.addColorStop(0, this.invertColor(this.state.colours.foreground) + 'FF');
			secondGradient.addColorStop(1, this.invertColor(this.state.colours.foreground) + '00');
			return {
				labels: this.state.deltaTime,
				datasets: [{
					label: 'Aim',
					data: this.state.aim,
					backgroundColor: gradient,
					borderColor: this.state.colours.foreground

				}, {
					label: 'Speed',
					data: this.state.speed,
					backgroundColor: secondGradient,
					borderColor: this.invertColor(this.state.colours.foreground)
				}]
			};
		};
		var arrSum = arr => arr.reduce((a,b) => a + b, 0)
		return (
			<div className='tight-section beatmap-container'>
				<img className='beatmap-img' src={`https://assets.ppy.sh/beatmaps/${this.state.beatmapset_id}/covers/cover@2x.jpg`} alt="" />
				<p className='beatmap-title'>{this.state.title} [{this.approved[parseInt(this.state.approved) + 2]}]</p>
				<p className='beatmap-sub-title'>By {this.state.artist}</p>
				<p className='beatmap-sub-title'>Mapped by {this.state.creator}</p>
				<select className='diff-select' onChange={this.changeDifficulty} style={{borderBottomColor:this.state.diffColour}}>
					{this.state.diffs.map((diff, i) => { return (<option value={i} key={i}>{diff}</option>) })}
				</select>
				<p className='beatmap-sub-title'>Stars: <StarBar stars={Math.round(this.state.difficultyrating * 100)/100}/> [{Math.round(this.state.difficultyrating * 100) / 100}]</p>
				<div className='two-section'>
					<div className='beatmap-sub-title'>CS: <ProgressBar max={7} min={2} value={this.state.diff_size} /> [{this.state.diff_size}]</div>
					<div className='beatmap-sub-title'>AR: <ProgressBar max={10} min={0} value={this.state.diff_approach} /> [{this.state.diff_approach}]</div>
				</div>
				<div className='two-section'>
					<div className='beatmap-sub-title'>HP: <ProgressBar max={10} min={0} value={this.state.diff_drain} /> [{this.state.diff_drain}]</div>
					<div className='beatmap-sub-title'>OD: <ProgressBar max={10} min={0} value={this.state.diff_overall} /> [{this.state.diff_overall}]</div>
				</div>
				<div className='three-section beatmap-sub-title center'>
				<i class="fas fa-times"></i> {this.state.max_combo}x
				</div>
				<div className='three-section beatmap-sub-title center'>
				<i class="fas fa-drum"></i> {this.state.bpm} bpm
				</div>
				<div className='three-section beatmap-sub-title center'>
				<i class="fas fa-clock"></i> {Math.floor(this.state.total_length / 60)}:{(this.state.total_length % 60 < 10 ? '0' : '') + (this.state.total_length % 60)} ({Math.floor(this.state.hit_length / 60)}:{(this.state.hit_length % 60 < 10 ? '0' : '') + (this.state.hit_length % 60)} Drain time)
				</div>
				<div>
					<div className='aimSpeedStrain center'>
						<Line height={100} redraw={true} data={data} options={{
							scales: {
								xAxes: [{
									ticks: {
										display: false //this will remove only the label
									},

								}],
								yAxes: [{
									ticks: {
										display: false
									}
								}]
							}
						}} />
						<p>Note: This graph is showing the speed and aim strain values. Aim refers to parts in the map where there are relativly big spacing between objects (For example jumps). Speed refers to the parts where you are required to click the circles in a short amount of time (For example streams and bursts)</p>
					</div>
					<div>Rating</div>
					<div><StarBar stars={this.state.rating}/></div>
					<div className="three-section beatmap-sub-title center"><i class="fas fa-heart"></i> {this.state.favourite_count}</div>
					<div className="three-section beatmap-sub-title center"><i class="fas fa-play"></i> {this.state.playcount}</div>
					<div className="three-section beatmap-sub-title center"><i class="fas fa-check"></i> {this.state.passcount}</div>
					<Pie data={{
						labels:['Failed','Passed','Aim','Speed'],
						datasets:[{
							label:'dATA2',
							data:[this.state.playcount,this.state.passcount],
							backgroundColor:[this.state.colours.foreground+'88',this.invertColor(this.state.colours.foreground)+'88'],
							borderColor:[this.state.colours.foreground,this.invertColor(this.state.colours.foreground)]
						},{
							label:'dATA',
							data:[0,0,Math.floor(arrSum(this.state.aim)),Math.floor(arrSum(this.state.speed))],
							backgroundColor:[0,0,this.state.colours.foreground+'88',this.invertColor(this.state.colours.foreground)+'88'],
							borderColor:[0,0,this.state.colours.foreground,this.invertColor(this.state.colours.foreground)]
						}
						]
					}}/>
				</div>
			</div>
		);
	}

	colours() {
		// var server = 'http://localhost:5000';
		// var urlParams = new URLSearchParams(window.location.search);
		// fetch(`${server}/api/colours?link=${`https://assets.ppy.sh/beatmaps/${urlParams.get('bsetid')}/covers/cover@2x.jpg`}`, { method: 'GET' }).then(res => res.json()).then(json => {
		// 	console.log(json)
			// document.body.style.backgroundColor = json.background;
			var container = document.getElementsByClassName('beatmap-container')[0]
			container.style.color = this.state.colours.foreground;
			document.getElementsByClassName('beatmap-img')[0].style.borderColor = this.state.colours.foreground;
			for (var i = 0; i < document.getElementsByClassName('progress-bar').length; i++) {
				document.getElementsByClassName('progress-bar')[i].style.background = this.state.colours.foreground;
				document.getElementsByClassName('progress-bar-container')[i].style.background = this.state.colours.foreground + '33';
			}
			document.getElementsByClassName('special')[0].style.backgroundColor = this.state.colours.foreground;
			document.getElementsByClassName('special')[0].style.color = '#ffffff';
		// });
	}

	invertColor(hex) {
		if (hex.indexOf('#') === 0) {
			hex = hex.slice(1);
		}
		// convert 3-digit hex to 6-digits.
		if (hex.length === 3) {
			hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
		}
		if (hex.length !== 6) {
			throw new Error('Invalid HEX color.');
		}
		// invert color components
		var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
			g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
			b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
		// pad each with zeros and return
		return '#' + this.padZero(r) + this.padZero(g) + this.padZero(b);
	}

	padZero(str, len) {
		len = len || 2;
		var zeros = new Array(len).join('0');
		return (zeros + str).slice(-len);
	}

	changeDifficulty() {
		var index = document.getElementsByClassName('diff-select')[0].value;
		this.data[index].diffColour = ''
		if (this.data[index].difficultyrating < 2) {
			this.data[index].diffColour = '#ABE21F';
		} else if (this.data[index].difficultyrating < 2.7) {
			this.data[index].diffColour = '#66DBFF';
		} else if (this.data[index].difficultyrating < 4) {
			this.data[index].diffColour = '#FFD819';
		} else if (this.data[index].difficultyrating < 5.3) {
			this.data[index].diffColour = '#FF5BB0';
		} else if (this.data[index].difficultyrating < 6.5) {
			this.data[index].diffColour = '#845BFF';
		} else {
			this.data[index].diffColour = '#000000';
		}
		this.setState(this.data[index]);
		this.forceUpdate();
	}
}



export default Beatmap;