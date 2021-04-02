import React from 'react';
import './Feed.css';
export default function NewsCard(props) {
  return (
    <div>
      <h1 className="articleHeadline">{props.feed.title}</h1>
      <h7 className="author">Author: {props.feed.author}</h7>
      <h7 className="publishTime">Publishing Time: {props.feed.created_at}</h7>
      <p className="articleContent">{props.feed.title}</p>
      <button>
        <a href={props.feed.url}>Read More</a>
      </button>
    </div>
  );
}
