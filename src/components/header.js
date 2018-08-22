import React, { Component } from 'react';
import styles from '../css/styles.css';

const getMonth = () => {
	const newDate = new Date();
	return newDate.getMonth();
}

const user = {
	name: 'Artem',
	lastname: 'Kliaus',
	age: 22
}


class Header extends Component {

	state = {
		title: 'Awesome application',
		active: ''
	}

	showText (e) {
		const text = e.target.value;
		const activated = text ? 'active' : 'non-active';
		this.setState({
			descr: text,
			active: activated
		})
	}

	render () {
		return (
			<header className={this.state.active}>
				<p className={styles.title}>{this.state.title}</p>
				<input
					className={styles.search}
					type="text"
					onChange={ (e) => { this.props.func(e) } } />
			</header>
		)
	}
}

export default Header;
