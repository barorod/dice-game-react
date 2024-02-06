import { useState } from 'react';
import Box from './Box';

export default function BoxGrid() {
	const [boxes, setBoxes] = useState([
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
	]);

	const reset = () =>
		setBoxes([false, false, false, false, false, false, false, false, false]);

	const toggleBox = (idx) => {
		setBoxes((oldBoxes) => {
			return oldBoxes.map((val, i) => {
				if (idx === i) {
					return !val;
				} else {
					return val;
				}
			});
		});
	};
	return (
		<div className="BoxGrid">
			{boxes.map((b, idx) => (
				<Box key={idx} isActive={b} toggle={() => toggleBox(idx)} />
			))}
			<button onClick={reset}>Reset</button>
		</div>
	);
}
