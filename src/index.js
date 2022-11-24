import TimeLine from 'pages/timeline';
import React from 'react';
import ReactDOM from 'react-dom/client';

// style
import GlobalStyle from './style/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <TimeLine />
  </React.StrictMode>
);