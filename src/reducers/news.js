const newsReducerDefaultState = {};

export default (state = newsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_NEWSLIST':
      console.log("REDUX: ADD_NEWSLIST");
      console.log(action.newsList);
      return {
        newsList:action.newsList
      };
    case 'REMOVE_NEWSLIST':
      return {
          newsList:{}
      };    
    default:
      return state;
  }
};
