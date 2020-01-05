import React from 'react';
import NavBar from './components/NavBar';
import MainTBB from './components/MainTBB';
import About from './components/About';
import Footer from './components/Footer';
import Showcase from './components/Showcase';
import './App.css';

function App() {
  return (
    <div className="App">
		<NavBar/>
		<MainTBB/>
		<About/>
		<Showcase title='Title' url='https://via.placeholder.com/1280x720' description='Hello this is a description'/>
		<Showcase title='Title' url='https://via.placeholder.com/1280x720' description='Hello this is a description'/>
		<Showcase title='Title' url='https://via.placeholder.com/1280x720' description='Hello this is a description'/>

		<Footer/>
    </div>
  );
}

export default App;
