import './App.css';
import React, { useState } from 'react';
import Game from './components/Game';
function App() {
	const [initGame, setInitGame] = useState(false);
	return (
		<div className="App">
			{!initGame && (
				<button
					className="startbtn"
					onClick={() => {
						setInitGame(!initGame);
					}}
				>
					START!
				</button>
			)}
			{initGame && <Game />}
		</div>
	);
}

export default App;
