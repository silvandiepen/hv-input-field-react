import React, { useState } from "react";
import "./index.css";

export default function ExampleComponent() {
	const [message, setMessage] = useState("React Example");

	return (
		<div className="App">
			<section className="background--green">
				<h1>React + Web Components</h1>
			</section>

			<section className="background--white">
				<h3>Web component Input</h3>
				<input-field
					label="Input in React"
					onChange={(event) => setMessage(event.target.value)}
					onEventBindValue={(event) => setMessage(event.target.value)}
					value={message}
				></input-field>
			</section>

			<section className="background--champagne">
				<h3>Default HTML Input</h3>
				<input
					onChange={(event) => setMessage(event.target.value)}
					value={message}
				></input>
			</section>
			<section className="background--blue">
				<p>
					Message: <strong>{message}</strong>
				</p>
			</section>
		</div>
	);
}
