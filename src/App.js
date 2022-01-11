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
					<p className="thanks">
						Special thanks to{' '}
						<a
							target="_blank"
							rel="noreferrer"
							style={{ color: 'rgb(154,133,232)', textAlign: 'center' }}
							href="https://www.flaticon.es/"
						>
							Flaticon
						</a>{' '}
						and{' '}
						<a
							target="_blank"
							rel="noreferrer"
							style={{ color: 'rgb(154,133,232)', textAlign: 'center' }}
							href="https://www.pinpng.com/download/bhmJmw_png-jojothinking-thinking-emoji-meme-jojo-transparent-png/"
						>
							Pping
						</a>
						&#160; GitHub repo{' '}
						<a
							style={{ color: 'rgb(154,133,232)', textAlign: 'center' }}
							href="https://github.com/AmirJV1/paperScissorsRocksGame"
							target="_blank"
							rel="noreferrer"
						>
							Here!
						</a>
					</p>
				</>
			)}
			{initGame && <Game />}
		</div>
	);
}

export default App;
