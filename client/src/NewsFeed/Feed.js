import React from 'react';
import NewsCard from '../Component/NewsCard';

export default function Feed(props) {
  return (
    <>
      {props.feed.map((item, i) => (
        <NewsCard key={i} feed={item} />
      ))}
    </>
  );
}
