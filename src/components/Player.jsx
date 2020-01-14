import React, { Component } from 'react'
import Loader from './Loader';
import GradeA from '../assets/grade_a.png';
import GradeS from '../assets/grade_s.png';
import GradeSH from '../assets/grade_sh.png';
import GradeSS from '../assets/grade_ss.png';
import GradeSSH from '../assets/grade_ssh.png';
import ProgressBar from './ProgressBar';
import {Bar, Pie} from 'react-chartjs-2';
import PopUp from './PopUp';
class Player extends Component {
	constructor() {
		super();
		this.countryCodes = { "BD": "Bangladesh", "BE": "Belgium", "BF": "Burkina Faso", "BG": "Bulgaria", "BA": "Bosnia and Herzegovina", "BB": "Barbados", "WF": "Wallis and Futuna", "BL": "Saint Barthelemy", "BM": "Bermuda", "BN": "Brunei", "BO": "Bolivia", "BH": "Bahrain", "BI": "Burundi", "BJ": "Benin", "BT": "Bhutan", "JM": "Jamaica", "BV": "Bouvet Island", "BW": "Botswana", "WS": "Samoa", "BQ": "Bonaire, Saint Eustatius and Saba ", "BR": "Brazil", "BS": "Bahamas", "JE": "Jersey", "BY": "Belarus", "BZ": "Belize", "RU": "Russia", "RW": "Rwanda", "RS": "Serbia", "TL": "East Timor", "RE": "Reunion", "TM": "Turkmenistan", "TJ": "Tajikistan", "RO": "Romania", "TK": "Tokelau", "GW": "Guinea-Bissau", "GU": "Guam", "GT": "Guatemala", "GS": "South Georgia and the South Sandwich Islands", "GR": "Greece", "GQ": "Equatorial Guinea", "GP": "Guadeloupe", "JP": "Japan", "GY": "Guyana", "GG": "Guernsey", "GF": "French Guiana", "GE": "Georgia", "GD": "Grenada", "GB": "United Kingdom", "GA": "Gabon", "SV": "El Salvador", "GN": "Guinea", "GM": "Gambia", "GL": "Greenland", "GI": "Gibraltar", "GH": "Ghana", "OM": "Oman", "TN": "Tunisia", "JO": "Jordan", "HR": "Croatia", "HT": "Haiti", "HU": "Hungary", "HK": "Hong Kong", "HN": "Honduras", "HM": "Heard Island and McDonald Islands", "VE": "Venezuela", "PR": "Puerto Rico", "PS": "Palestinian Territory", "PW": "Palau", "PT": "Portugal", "SJ": "Svalbard and Jan Mayen", "PY": "Paraguay", "IQ": "Iraq", "PA": "Panama", "PF": "French Polynesia", "PG": "Papua New Guinea", "PE": "Peru", "PK": "Pakistan", "PH": "Philippines", "PN": "Pitcairn", "PL": "Poland", "PM": "Saint Pierre and Miquelon", "ZM": "Zambia", "EH": "Western Sahara", "EE": "Estonia", "EG": "Egypt", "ZA": "South Africa", "EC": "Ecuador", "IT": "Italy", "VN": "Vietnam", "SB": "Solomon Islands", "ET": "Ethiopia", "SO": "Somalia", "ZW": "Zimbabwe", "SA": "Saudi Arabia", "ES": "Spain", "ER": "Eritrea", "ME": "Montenegro", "MD": "Moldova", "MG": "Madagascar", "MF": "Saint Martin", "MA": "Morocco", "MC": "Monaco", "UZ": "Uzbekistan", "MM": "Myanmar", "ML": "Mali", "MO": "Macao", "MN": "Mongolia", "MH": "Marshall Islands", "MK": "Macedonia", "MU": "Mauritius", "MT": "Malta", "MW": "Malawi", "MV": "Maldives", "MQ": "Martinique", "MP": "Northern Mariana Islands", "MS": "Montserrat", "MR": "Mauritania", "IM": "Isle of Man", "UG": "Uganda", "TZ": "Tanzania", "MY": "Malaysia", "MX": "Mexico", "IL": "Israel", "FR": "France", "IO": "British Indian Ocean Territory", "SH": "Saint Helena", "FI": "Finland", "FJ": "Fiji", "FK": "Falkland Islands", "FM": "Micronesia", "FO": "Faroe Islands", "NI": "Nicaragua", "NL": "Netherlands", "NO": "Norway", "NA": "Namibia", "VU": "Vanuatu", "NC": "New Caledonia", "NE": "Niger", "NF": "Norfolk Island", "NG": "Nigeria", "NZ": "New Zealand", "NP": "Nepal", "NR": "Nauru", "NU": "Niue", "CK": "Cook Islands", "XK": "Kosovo", "CI": "Ivory Coast", "CH": "Switzerland", "CO": "Colombia", "CN": "China", "CM": "Cameroon", "CL": "Chile", "CC": "Cocos Islands", "CA": "Canada", "CG": "Republic of the Congo", "CF": "Central African Republic", "CD": "Democratic Republic of the Congo", "CZ": "Czech Republic", "CY": "Cyprus", "CX": "Christmas Island", "CR": "Costa Rica", "CW": "Curacao", "CV": "Cape Verde", "CU": "Cuba", "SZ": "Swaziland", "SY": "Syria", "SX": "Sint Maarten", "KG": "Kyrgyzstan", "KE": "Kenya", "SS": "South Sudan", "SR": "Suriname", "KI": "Kiribati", "KH": "Cambodia", "KN": "Saint Kitts and Nevis", "KM": "Comoros", "ST": "Sao Tome and Principe", "SK": "Slovakia", "KR": "South Korea", "SI": "Slovenia", "KP": "North Korea", "KW": "Kuwait", "SN": "Senegal", "SM": "San Marino", "SL": "Sierra Leone", "SC": "Seychelles", "KZ": "Kazakhstan", "KY": "Cayman Islands", "SG": "Singapore", "SE": "Sweden", "SD": "Sudan", "DO": "Dominican Republic", "DM": "Dominica", "DJ": "Djibouti", "DK": "Denmark", "VG": "British Virgin Islands", "DE": "Germany", "YE": "Yemen", "DZ": "Algeria", "US": "United States", "UY": "Uruguay", "YT": "Mayotte", "UM": "United States Minor Outlying Islands", "LB": "Lebanon", "LC": "Saint Lucia", "LA": "Laos", "TV": "Tuvalu", "TW": "Taiwan", "TT": "Trinidad and Tobago", "TR": "Turkey", "LK": "Sri Lanka", "LI": "Liechtenstein", "LV": "Latvia", "TO": "Tonga", "LT": "Lithuania", "LU": "Luxembourg", "LR": "Liberia", "LS": "Lesotho", "TH": "Thailand", "TF": "French Southern Territories", "TG": "Togo", "TD": "Chad", "TC": "Turks and Caicos Islands", "LY": "Libya", "VA": "Vatican", "VC": "Saint Vincent and the Grenadines", "AE": "United Arab Emirates", "AD": "Andorra", "AG": "Antigua and Barbuda", "AF": "Afghanistan", "AI": "Anguilla", "VI": "U.S. Virgin Islands", "IS": "Iceland", "IR": "Iran", "AM": "Armenia", "AL": "Albania", "AO": "Angola", "AQ": "Antarctica", "AS": "American Samoa", "AR": "Argentina", "AU": "Australia", "AT": "Austria", "AW": "Aruba", "IN": "India", "AX": "Aland Islands", "AZ": "Azerbaijan", "IE": "Ireland", "ID": "Indonesia", "UA": "Ukraine", "QA": "Qatar", "MZ": "Mozambique" }
		this.state = {
			loading: true,
			error: ''
		};
	}
	componentDidMount() {
		var urlParams = new URLSearchParams(window.location.search);
		fetch(`${process.env.REACT_APP_SERVER}/api/player?osukey=${process.env.REACT_APP_OSU_KEY}&user=${urlParams.get('user')}`).then(res => res.json()).then(json => {
			if (json.error) {
				this.setState({error: json.error})
				return;
			}
			console.log(json)
			json.loading = false;
			this.setState(json)
		})

		fetch(`${process.env.REACT_APP_SERVER}/api/best?osukey=${process.env.REACT_APP_OSU_KEY}&user=${urlParams.get('user')}`).then(res => res.json()).then(json => {
			console.log(json)
		})
	}

	render() {
		if (this.state.error != '') {
			return <div><PopUp value={this.state.error}/><div className='section'></div></div>;
		}

		if (this.state.loading) {
			return <Loader />;
		}
		this.colours();
		var labels = Object.keys(this.state.computedData.mods)
		var datasets = []
		for (var i = 0;i < labels.length;i++) {
			datasets.push({label:labels[i],data:Object.values(this.state.computedData.mods)[i]});
		}
		console.log(datasets)
		var max = Math.max(...Object.values(this.state.computedData.mods))
		var mod = '';
		for (var i = 0;i < Object.keys(this.state.computedData.mods).length;i++) {
				if (Object.values(this.state.computedData.mods)[i] == max) {
					var mod = Object.keys(this.state.computedData.mods)[i]
					break;
				}
		}
		console.log(mod)
		var modCombo = mod.match(/.{1,2}/g)
		console.log(modCombo)
		var elements;
		return (
			<div className='tight-section'>
				<div style={{ textAlign: 'center' }}>
					<div className='player-top-container'>
						<img className='player-img' src={`https://a.ppy.sh/${this.state.user_id}`} alt="" />
						<div className='player-info'>
							<div className='player-name'>{this.state.username}</div>
							<div>
								<img className='player-flag' src={`${process.env.REACT_APP_SERVER}/api/flag?code=${this.state.country}`} alt="" />
								<div className='player-country'>{this.countryCodes[this.state.country]}</div>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div className='two-section center beatmap-sub-title'>Global Rank: #{this.state.pp_rank}</div>
					<div className='two-section center beatmap-sub-title'>Country Rank: #{this.state.pp_country_rank}</div>

					<div className="three-section center beatmap-sub-title">{Math.floor(this.state.accuracy * 100)/100}%</div>
					<div className="three-section center beatmap-sub-title">{Math.floor(this.state.pp_raw)}pp</div>
					<div className="three-section center beatmap-sub-title">{Math.floor((this.state.total_seconds_played/60/60) * 10)/10}h</div>

					<div className="five-section center beatmap-sub-title">
						<div className='player-grade-img'><img src={GradeA} alt=""/></div>
						{this.state.count_rank_a}
					</div>
					<div className="five-section center beatmap-sub-title">
						<div className='player-grade-img'><img src={GradeS} alt=""/></div>
						{this.state.count_rank_s}
					</div>
					<div className="five-section center beatmap-sub-title">
						<div className='player-grade-img'><img src={GradeSH} alt=""/></div>
						{this.state.count_rank_sh}
					</div>
					<div className="five-section center beatmap-sub-title">
						<div className='player-grade-img'><img src={GradeSS} alt=""/></div>
						{this.state.count_rank_ss}
					</div>
					<div className="five-section center beatmap-sub-title">
						<div className='player-grade-img'><img src={GradeSSH} alt=""/></div>
						{this.state.count_rank_ssh}
					</div>
					<div className='center beatmap-sub-title'>
						Level: {Math.floor(this.state.level)} <ProgressBar max={1} min={0} value={this.state.level - Math.floor(this.state.level)}/>
					</div>
					<div className="two-section beatmap-sub-title center">Average Combo: {Math.floor(this.state.computedData.averageCombo)}x</div>
					<div className="two-section beatmap-sub-title center">unweighted pp: {this.state.computedData.unweightedPP}pp</div>
					<div className='center beatmap-sub-title'>Favourite Mod Combination <div>{modCombo.map((elem,i) => (<img className='mod' src={`./assets/${elem}.png`}/>))}</div></div>
					<div>
						<Bar data={{
							labels: Object.keys(this.state.computedData.mods),
							datasets:[{label:'Number of plays',data:Object.values(this.state.computedData.mods),backgroundColor:this.state.colours.foreground}]
						}}/>
					</div>
					<div>
						<Pie data={{
							labels: ['FCs','Chokes','Other plays'],
							datasets:[{label:'Number of plays',data:[this.state.computedData.FCs,this.state.computedData.chokes,this.state.computedData.other],backgroundColor:['#ff333388','#3333ff88','#33ff3388']}]
						}}/>
					</div>

					<div className='beatmap-sub-title center'>Note: The data is extracted from the user's top 100 best plays so the data might be inaccurate.</div>
				</div>
			</div>
		);
	}

	colours() {
		var urlParams = new URLSearchParams(window.location.search);
		fetch(`${process.env.REACT_APP_SERVER}/api/colours?link=${`https://a.ppy.sh/${urlParams.get('user')}`}`, { method: 'GET' }).then(res => res.json()).then(json => {
			console.log(json)
			// document.body.style.backgroundColor = json.background;
			// document.body.style.color = json.foreground;
			// document.getElementsByClassName('beatmap-img')[0].style.borderColor = json.foreground;
			// for (var i = 0; i < document.getElementsByClassName('progress-bar').length; i++) {
			// 	document.getElementsByClassName('progress-bar')[i].style.background = json.foreground;
			// 	document.getElementsByClassName('progress-bar-container')[i].style.background = json.foreground + '33';
			// }
			// document.getElementsByClassName('special')[0].style.backgroundColor = json.foreground;
			// document.getElementsByClassName('special')[0].style.color = '#ffffff';
			this.setState({ colours: { background: json.background, foreground: json.foreground } })
		});
	}
	
}

export default Player;