import React from 'react';
import NavBar from './components/NavBar';
import MainTBB from './components/MainTBB';
import About from './components/About';
import Footer from './components/Footer';
import Showcase from './components/Showcase';
import Beatmap from './components/Beatmap';
import SearchBar from './components/SearchBar';
import NotFound from './components/NotFound';
import Changelog from './components/Changelog';
import Player from './components/Player';
import PopUp from './components/PopUp';
import Commands from './components/Commands'
import './index.css';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

function App() {
	return (
		<Router>
			<NavBar />
			{/* <PopUp/> */}
			<Switch>
				<Route path="/beatmap">
					<BeatmapStats />
				</Route>
				<Route path='/player'>
				<Player/>
				</Route>
				<Route path='/search'>
					<SearchBar/>
				</Route>
				<Route path='/changelog'>
					<Changelog/>
				</Route>
				<Route path='/commands'>
					<Commands/>
				</Route>
				<Route path='/' exact>
					<Home />
				</Route>
				<Route path='/'>
					<NotFound/>
				</Route>
			</Switch>
			<div>
				<p className='dev-text center'>This website is still in <u>alpha</u> and a lot of features, especially in the stats pages, are missing or very limited. If you found any bugs or have a suggestion then please <a href='https://github.com/Moorad/the-beautiful-bot-web/issues/new'>open an issue on github</a> <i class="far fa-smile fa-lg"></i></p>
				<div className='dev-build'></div>
			</div>
			<Footer/>
		</Router >
	);
}

function Home() {
	return (
		<div>
			<div className='section'>
				<MainTBB />
			</div>
			<div className='tight-section'>
				<About />
				<Showcase title='Show your most recent play' url='https://i.imgur.com/3eZouLn.png' description='With the beautiful bot you can show your most recent play to your friends and other server members. The recent play shows detailed data about your play like the amount of pp given, the amount of pp for an FC with the given accuracy and the completion percentage if the user failed' />
				<Showcase left={true} title='User information' url='https://i.imgur.com/4mbVbjr.png' description='The beautiful bot can show stats about the given user. it can show there rank, amount of pp, accuracy, level and more!' />
				<Showcase title='Beatmap Details' url='https://i.imgur.com/fPFsvv4.png' description='The bot is able to generate cards to show the stats of a map. The bot can show information CS, AR, HP, OD, BPM, Combo and even the amount of pp for a 100%, 95% and 90% FC' />
			</div>
		</div>
	)
}

function BeatmapStats() {
	return (
		<div>
			<Beatmap />
		</div>
	);
}



export default App;
