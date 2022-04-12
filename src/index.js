import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Description from './components/Description/Description';


ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route exact path="/"  element={<App />} />
       <Route path="/about/:id" element={<Description/>} />
     {/* <Route
          path='/about/:id'
          render={props => <Description text="hello" {...props} />}
        />   */}
          </Routes>
  </BrowserRouter>
    </React.StrictMode>,
  document.getElementById('root')

  // <React.StrictMode>
  // <BrowserRouter>
  // <Route path="/" element={<App />} />
  //    <Route path="/about/:id" element={<Description text="hello" />} />
  //  </BrowserRouter>
  // </React.StrictMode>,
  // document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
