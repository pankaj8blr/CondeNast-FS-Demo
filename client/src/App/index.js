import React from 'react';
import Search from '../Search/index';

import './App.css';

export default function App() {
  return (
    <>
      <div className="NewsPortalApp">
        <header className="NewsPortalAppHeader"></header>
        <h1>Welcome to the Condé Nast News Portal</h1>
        <Search />
      </div>
    </>
  );
}
