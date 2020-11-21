import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import 'semantic-ui-css/semantic.min.css'
import { createStore } from 'redux'
import rootReducer from './reducers'
import { loadState, saveState } from './localStorage'

const persistStore = loadState()
const store = createStore(rootReducer,persistStore,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.subscribe(() => {
  saveState(store.getState())
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default store
