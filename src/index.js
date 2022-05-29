import  React from 'react';
import  ReactDOM  from 'react-dom';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import 'antd/dist/antd.css';
import store from './app/store';

const container = document.getElementById('root');
const root = createRoot(container); 

    root.render(
        <Router>
               <Provider store={store}>
                  <App tab="home" />
              </Provider>
        </Router>);


   
// createRoot(container!) if you use TypeScript
//root.render(<App tab="home" />);
