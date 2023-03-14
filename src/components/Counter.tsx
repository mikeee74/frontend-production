import React from "react";
import classes from "./Counter.module.scss";

export const Counter = () => {
	const [counter, setCounter] = React.useState<number>(0);

	const increment = () => {
		setCounter((state) => state + 1);
		setCounter((state) => state + 1);
	};

	return (
		<div>
			<h1>{counter}</h1>
			<button className={classes.button} onClick={increment}>
				Increment
			</button>
		</div>
	);
};
