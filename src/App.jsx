import React from 'react';
import NavBar from './components/NavBar';
import MainTBB from './components/MainTBB';
import About from './components/About';
import Footer from './components/Footer';
import Showcase from './components/Showcase';
import StaticNavBar from './components/StaticNavBar';
import Beatmap from './components/Beatmap';
import SearchBar from './components/SearchBar';
import './index.css';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
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
				<Route path='/'>
					<Home />
				</Route>
			</Switch>
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
				<Showcase title='Title' url='https://via.placeholder.com/1280x720' description='Hello this is a description' />
				<Showcase title='Title' url='https://via.placeholder.com/1280x720' description='Hello this is a description' />
				<Showcase title='Title' url='https://via.placeholder.com/1280x720' description='Hello this is a description' />
			</div>
			<Footer />
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
