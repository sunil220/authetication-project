import React, { Component } from "react";

export default class Callback extends Component {
	componentDidMount() {
		// Handle authentication if expected value are in the URL
		if (/access.token|id_token|error/.test(this.props.location.hash)) {
			this.props.auth.handleAuthentication();
		} else {
			throw new Error("Invalid Callback URL.");
		}
	}
	render() {
		return <h1>Callback</h1>;
	}
}
