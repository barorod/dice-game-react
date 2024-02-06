import './App.css';
import Lucky7 from './Lucky7';
import Die from './Die';
import Dice from './Dice';
import LuckyN from './LuckyN';

function App() {
	return (
		<>
			<LuckyN />
			<LuckyN numDice={3} goal={11} />
			{/* <Dice dice={[3, 6, 1]} /> */}
			{/* <Dice dice={[1, 2, 3]} color="red" /> */}
		</>
	);
}

export default App;
