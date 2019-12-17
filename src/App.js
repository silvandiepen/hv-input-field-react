/** @jsx nativeEvents */
// eslint-disable-next-line
import React, { useState } from "react";
import nativeEvents from "jsx-native-events";
import "./index.css";

export default function ExampleComponent() {
	const [form, setState] = useState({
		firstName: "React",
		lastName: "Example"
	});

	const updateField = (event) => {
		setState({
			...form,
			[event.target.name]: event.target.value
		});
	};

	return (
		<div className="App">
			<section className="background--green">
				<h1>React + Web Components</h1>
			</section>

			<section className="background--white">
				<h3>Web component Input</h3>
				<input-field
					label="First name"
					name="firstName"
					value={form.firstName}
					onChange={(event) => {
						console.log("test");
						updateField();
						console.log(event);
					}}
					onEventBindValue={(event) => {
						console.log("test2");
						updateField();
						console.log(event);
					}}
				></input-field>

				<input-field
					label="Last name"
					name="lastName"
					value={form.lastName}
					onChange={updateField}
					onEventBindValue={updateField}
				></input-field>
			</section>

			<section className="background--champagne">
				<h3>Default HTML Input</h3>
				<input
					name="firstName"
					value={form.firstName}
					onChange={updateField}
				></input>
				<input
					name="lastName"
					value={form.lastName}
					onChange={updateField}
				></input>
			</section>
			<section className="background--blue">
				<strong>
					<pre>{JSON.stringify(form)}</pre>
				</strong>
			</section>
		</div>
	);
}
