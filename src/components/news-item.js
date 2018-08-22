import React from 'react';

const NewsItem = ({item}) => {
	return (
		<div className='news-item'>
			<h3>{item.title}</h3>
			<span>{item.feed}</span>
		</div>
	)
}

export default NewsItem;
