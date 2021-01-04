import { useEffect, useState } from 'react';
import './App.css';
import api from 'axios'
import { BrowserRouter, Route } from 'react-router-dom';
import Routes from '../src/routes/index'

function App() {

  return (
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  );
}

export default App;
