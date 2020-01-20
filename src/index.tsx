import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { enthusiasm } from './reducers/index';
import { StoreState } from './types/index';
import PompeContainer from './containers/PompeContainer';
import './App.css';

const store = createStore<StoreState>(enthusiasm, {
    enthusiasmLevel: 1,
    languageName: 'TypeScript',
    pompes: [],
  })

ReactDOM.render(
    (
        <Provider store={store}>
            <PompeContainer />
        </Provider>
    )
    ,
    document.getElementById('root') as HTMLElement
);

serviceWorker.unregister();
