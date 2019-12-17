import React, { useState } from "react";
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
					onChange={updateField}
					onEventBindValue={updateField}
					value={form.firstName}
				></input-field>
				<input-field
					label="Last name"
					name="lastName"
					onChange={updateField}
					onEventBindValue={updateField}
					value={form.lastName}
				></input-field>
			</section>

			<section className="background--champagne">
				<h3>Default HTML Input</h3>
				<input
					onChange={updateField}
					name="firstName"
					value={form.firstName}
				></input>
				<input
					onChange={updateField}
					name="lastName"
					value={form.lastName}
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
