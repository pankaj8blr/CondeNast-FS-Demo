import React, { useState, useEffect, useCallback } from 'react';
import Feed from './Feed';

export default function NewsFeed(props) {
  return (
    <>
      {props.errorStatus && <div>Something went wrong ...</div>}
      {props.loadingStatus ? (
        <div>Loading ...</div>
      ) : (
        <Feed feed={props.headlines} />
      )}
    </>
  );
}
