import React, { useState } from 'react';
import { MDBCol } from 'mdbreact';
import 'bootstrap/dist/css/bootstrap.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Form, Button } from 'react-bootstrap';
import './Search.css';
import NewsFeed from '../NewsFeed/index';

export default function Search() {
  const [headlines, setHeadlines] = useState([]);
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getSearchResults = (event) => {
    event.preventDefault();
    let url = 'http://localhost:8080/hits';
    if (value.trim().length !== 0) {
      url = 'http://localhost:8080/search?q=' + value;
      console.log('handleInputChange search: Url: ', url);
    }
    console.log('Search:  url: ', url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log('  data: ', data);
        setHeadlines(data.hits);
        setIsLoading(false);
        console.log(' after headlines: ', headlines);
      })
      .catch((error) => {
        console.log('Error inside fetch: ', error);
        setIsError(true);
      });
  };

  function handleInputChange(event) {
    event.preventDefault();
    console.log('handleInputChange value: ', event.target.value);
    setValue(event.target.value);
    console.log('Search:  value: ', value);
  }

  function clearInput() {
    setValue('');
  }

  return (
    <>
      <MDBCol md="6" className="search">
        <Form onSubmit={getSearchResults}>
          <div className="input-group md-form form-sm form-1 pl-0">
            <div className="input-group-prepend">
              <span
                className="input-group-text purple lighten-3"
                id="basic-text1"
              >
                <FontAwesomeIcon icon={faSearch} />
              </span>
            </div>
            <Form.Control
              type="text"
              placeholder="Search"
              className="form-control my-0 py-1"
              aria-label="Search"
              onChange={handleInputChange}
            />
          </div>
          <Button variant="primary" type="submit">
            Search
          </Button>
        </Form>
      </MDBCol>
      <NewsFeed
        errorStatus={isError}
        loadingStatus={isLoading}
        headlines={headlines}
      />
    </>
  );
}
