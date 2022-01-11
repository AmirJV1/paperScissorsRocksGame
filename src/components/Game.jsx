import React, { useState, useEffect } from 'react';
import './game.css';

const Game = () => {
	const images = {
		Rocks: './rock.png',
		Papers: './paper.png',
		Scissors: './scissors.png'
	};
	const randNum = (list) => {
		return Math.floor(Math.random() * list.length);
	};
	const frases = [
		'Some Umi, they are a good choice!',
		'That Umi will win!',
		'Nevermind your Umi are not so good',
		'Good choice!',
		'Nice Umi',
		'Umi are looking awesome!',
		'you may win with Umi',
		'I need more cool phrases',
		'I would not choose that!',
		'cool now go and win with that Umi'
	];
	const [counter, setCounter] = useState(2);
	const [userWeapon, setUserWeapon] = useState('');
	const [enemyWeapon, setEnemyWeapon] = useState('');

	const enemyWeapons = ['Rocks', 'Papers', 'Scissors'];
	const [displayWeapon, setDisplayWeapon] = useState('');
	useEffect(() => {
		counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
	}, [counter]);

	const weaponChosen = (weapon) => {
		console.log(weapon);
		setUserWeapon(weapon);
		setEnemyWeapon(enemyWeapons[randNum(enemyWeapons)]);
	};
	const reset = () => {
		setCounter(4);
		setUserWeapon('');
		setEnemyWeapon('');
		setDisplayWeapon('');
	};
	const weaponHover = (weapon) => {
		setDisplayWeapon(weapon);
	};
	const getWinner = () => {
		if (userWeapon === enemyWeapon)
			return <h2 style={{ textAlign: 'center' }}>It's a tie!</h2>;
		if (
			(userWeapon === 'Papers') & (enemyWeapon === 'Rocks') ||
			(userWeapon === 'Scissors') & (enemyWeapon === 'Papers') ||
			(userWeapon === 'Rocks') & (enemyWeapon === 'Scissors')
		) {
			return <h2 style={{ textAlign: 'center' }}>You win!</h2>;
		}
		if (
			(enemyWeapon === 'Papers') & (userWeapon === 'Rocks') ||
			(enemyWeapon === 'Scissors') & (userWeapon === 'Papers') ||
			(enemyWeapon === 'Rocks') & (userWeapon === 'Scissors')
		) {
			return <h2 style={{ textAlign: 'center' }}>You loose!</h2>;
		}
	};
	return (
		<div className="gameCont">
			{(userWeapon === '') & (enemyWeapon === '') ? (
				<>
					{counter !== 0 && <div>Game starts in: {counter}</div>}
					{counter === 0 && (
						<div className="menu">
							{displayWeapon !== '' && (
								<img
									className="imgDisplay"
									src={images[displayWeapon]}
									alt={displayWeapon}
								/>
							)}
							{!displayWeapon ? (
								<div>
									<p>Choose your weapon!</p>
									<img
										style={{ width: '200px', height: '200px' }}
										src="./thinking.png"
										alt="thinking emoji"
									/>
								</div>
							) : (
								<div className="previewChoice">
									<p>{frases[randNum(frases)].replace('Umi', `${displayWeapon}`)}</p>
									<i>(click to confirm your choice)</i>
								</div>
							)}
							<div className="btnOptions">
								<button
									onClick={(e) => weaponChosen(e.target.value)}
									onMouseOver={() => weaponHover('Papers')}
									value="Papers"
								>
									Papers!
								</button>
								<button
									onClick={(e) => weaponChosen(e.target.value)}
									onMouseOver={() => weaponHover('Scissors')}
									value="Scissors"
								>
									Scissors!
								</button>
								<button
									onClick={(e) => weaponChosen(e.target.value)}
									onMouseOver={() => weaponHover('Rocks')}
									value="Rocks"
								>
									Rocks!
								</button>
							</div>
						</div>
					)}
				</>
			) : (
				''
			)}
			{userWeapon !== '' && enemyWeapon !== '' ? (
				<>
					<div className="ansCont">
						<h2>&#160; The enemy: &#160;</h2>
						<h1>{enemyWeapon}</h1>
						<img
							className="imgDisplay"
							src={images[enemyWeapon]}
							alt={'your enemy has choosen ' + enemyWeapon}
						/>
						<h1> &#160; VS &#160; </h1>
						<img
							className="imgDisplay"
							src={images[`${userWeapon}`]}
							alt={'you have choosen ' + userWeapon}
						/>
						<h2>&#160; You: &#160;</h2>
						<h1>{userWeapon}</h1>
					</div>
					<div>
						{getWinner()}
						<button onClick={reset}>Play Again!</button>
					</div>
				</>
			) : (
				''
			)}
		</div>
	);
};

export default Game;
