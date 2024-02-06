import './App.css';
import Lucky7 from './Lucky7';
import Die from './Die';
import Dice from './Dice';

function App() {
	return (
		<>
			<Dice dice={[3, 6, 1]} />
			<Dice dice={[1, 2, 3]} color="red" />
		</>
	);
}

export default App;
