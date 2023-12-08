import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import BookApp from './BookApp';
// document.querySelector("#root")
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <App /> */}
    <BookApp />
  </>
);
