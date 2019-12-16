import React, { Component } from "react";
import { wc } from "./utils/webcomponent";
import "./index.css";

class App extends Component {
	constructor(props, onChange) {
		super(props);
		this.state = {
			message: "React Example"
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({ message: event.target.value });
	}
	componentDidMount() {
		this.refs.webComponentInput.addEventListener("bindValue", (event) => {
			this.setState({ message: event.detail });
		});
	}

	render() {
		return (
			<div className="App">
				<section className="background--green">
					<h1>React + Web Components</h1>
				</section>
				<section className="background--white">
					<h3>Web component Input</h3>
					<input-field
						label="Input in React"
						value={this.state.message}
						ref="webComponentInput"
					></input-field>
				</section>

				<section className="background--champagne">
					<h3>Default HTML Input</h3>
					<input
						onChange={this.handleChange}
						value={this.state.message}
					></input>
				</section>
				<section className="background--blue">
					<p>
						Message: <strong>{this.state.message}</strong>
					</p>
				</section>
			</div>
		);
	}
}
export default App;
