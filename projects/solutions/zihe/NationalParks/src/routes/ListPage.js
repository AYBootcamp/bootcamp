import React from 'react';
import FetchParks from '../components/FetchParks';
import SearchForm from '../components/SearchForm';

export default function ListPage() {

  return (
    <div>
      <div>
        <SearchForm />
      </div>
      <div>
        <FetchParks />
      </div>
    </div>
  );
}