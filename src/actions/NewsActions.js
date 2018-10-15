import FetchActions from './FetchActions';
import Config from '../Config';


const getNews = () => {
    return FetchActions.get('top-headlines?sources=bbc-news&apiKey=2feccb605e614978a2d3865075b01e0c');
}

const createAccount = (data) => {
    return FetchActions.put('/account', data);
}

console.log(Config.BBC_API_KEY);

export { getNews, createAccount};
