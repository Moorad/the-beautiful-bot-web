import React from 'react';
import NavBar from './components/NavBar';
import MainTBB from './components/MainTBB';
import About from './components/About';
import Footer from './components/Footer';
import Showcase from './components/Showcase';
import StaticNavBar from './components/StaticNavBar';
import Beatmap from './components/Beatmap';
import SearchBar from './components/SearchBar';
import NotFound from './components/NotFound';
import Changelog from './components/Changelog';
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
			<StaticNavBar />
			<Switch>
				<Route path="/beatmap">
					<BeatmapStats />
				</Route>
				<Route path='/search'>
					<SearchBar/>
				</Route>
				<Route path='/changelog'>
					<Changelog/>
				</Route>
				<Route path='/' exact>
					<Home />
				</Route>
				<Route path='/'>
					<NotFound/>
				</Route>
			</Switch>
			<div>
				<p className='dev-text center'>This website is still in Alpha and a lot of features, especially in the stats pages, are missing or very limited. Please report any bugs by <a href='https://github.com/Moorad/the-beautiful-bot-web/issues/new'>opening an issue on github</a></p>
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
				<Showcase title='Title' url='https://i.imgur.com/3eZouLn.png' description='Hello this is a description' />
				<Showcase title='Title' url='https://via.placeholder.com/1280x720' description='Hello this is a description' />
				<Showcase title='Title' url='https://via.placeholder.com/1280x720' description='Hello this is a description' />
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
