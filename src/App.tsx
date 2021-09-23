import React from 'react';
import './App.css';
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'

import Header from './components/Header'
import ContentPage from './components/ContentPage';

const GlobalStyle = createGlobalStyle`
* {
  margin:0;
  padding:0;
  box-sizing: border-box;
}`


function App() {


  return (
    <Router>
      <GlobalStyle />
      <div>
        <Header />
        <ContentPage />
      </div>
    </Router>
  );
}

export default App;
