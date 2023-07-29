import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { NavProvider } from './context/nav_context.jsx';
import { FilterProvider } from './context/filter_context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FilterProvider>
      <NavProvider>
        <App />
      </NavProvider>
    </FilterProvider>
  </React.StrictMode>
)
