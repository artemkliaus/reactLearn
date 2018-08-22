import React from 'react';

//COMPONENTS
import NewsItem from './news-item';


const NewsList = (props) => {
	console.log(props)

	const items = props.news.map((item) => {
		return (
			<NewsItem key={item.id} item={item}/>
		)
	});

	return (
		<div>
			{props.children}
			{items}
		</div>
	)

}

export default NewsList;
