import './App.css';
import React, { useState } from 'react';
import Game from './components/Game';
function App() {
	const [initGame, setInitGame] = useState(false);
	return (
		<div className="App">
			{!initGame && (
				<>
					<button
						className="startbtn"
						onClick={() => {
							setInitGame(!initGame);
						}}
					>
						START!
					</button>
					<p>
						Special thanks to <a href="https://www.flaticon.es/">Flaticon</a> and{' '}
						<a href="https://www.pinpng.com/download/bhmJmw_png-jojothinking-thinking-emoji-meme-jojo-transparent-png/">
							Pping
						</a>
					</p>
				</>
			)}
			{initGame && <Game />}
		</div>
	);
}

export default App;
