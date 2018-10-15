import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import { saveState, loadState } from './store/loadStorage';
import { addNewsList } from './actions/redux/news';

const store = configureStore();

store.subscribe(() => {
    saveState({
        newsList:store.getState().newsList});
});

store.dispatch(addNewsList(loadState));
// console.log("INDEX.JS");
// console.log(store.getState());
const jsx = (
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
