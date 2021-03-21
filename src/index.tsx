import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import {BrowserRouter} from 'react-router-dom';
import ErrorBoundry from './components/error-boundary/ErrorBoundary';

ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <ErrorBoundry>
          <App/>
        </ErrorBoundry>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
