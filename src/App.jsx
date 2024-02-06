import './App.css';
import LuckyN from './LuckyN';
import { sum } from './utils';

function lessThan4(dice) {
	return sum(dice) < 4;
}

function sameValue(dice) {
	return dice.every((v) => v === dice[0]);
}

function App() {
	return (
		<>
			<LuckyN title="Roll less than 4" winCheck={lessThan4} />
			<LuckyN title="Roll the same number" winCheck={sameValue} />
		</>
	);
}

export default App;
