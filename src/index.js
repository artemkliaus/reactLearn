import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//COMPONENTS
import Header from './components/header';
import NewsList from './components/news-list';

import json from './db.json';

class App extends Component {

	state = {
		news: json,
		filtered: []
	}

	someFunc = (e) => {
		const typed = e.target.value;
		const filtered = this.state.news.filter((item) => {
			return item.title.indexOf(typed) > -1
		});

		this.setState({
			filtered
		})
	}

	render () {
		let filtered = this.state.filtered;

		return (
			<div>
				<Header func={this.someFunc}/>
				<NewsList news={ filtered.length === 0 ? this.state.news : filtered } ola='1'>
					The news in bottom:
				</NewsList>
			</div>
		)
	}
}

ReactDOM.render(<App/>, document.querySelector('#root'));
