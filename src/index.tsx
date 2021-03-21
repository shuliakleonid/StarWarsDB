import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import {HashRouter} from 'react-router-dom';
import ErrorBoundry from './components/error-boundary/ErrorBoundary';

ReactDOM.render(
    <React.StrictMode>
      <HashRouter>
        <ErrorBoundry>
          <App/>
        </ErrorBoundry>
      </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
