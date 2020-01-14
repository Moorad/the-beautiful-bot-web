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
				<Showcase left={true} title='User information' url='https://i.imgur.com/nZtvoDt.png' description='The bot can show your top 5 best pp plays. The bot would show information such as your combo, 100s 50s and misses and when is the play achieved. Its a pretty good way to flex on your fellow server members' />
				<Showcase title='Beatmap Details' url='https://i.imgur.com/fPFsvv4.png' description='Hello this is a description' />
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
