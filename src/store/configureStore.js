import {createStore, combineReducers} from 'redux';
import newsListReducers from '../reducers/news';
import { loadState } from './loadStorage';

export default () => {
    const newsListLocal = loadState();
    console.log('Persistent');
    console.log(newsListLocal);

    const store = createStore(
        combineReducers({
          newsList: newsListLocal === undefined ? newsListReducers : (state = [], action ) => loadState().newsList
        })
      );
  
    return store;
  };

