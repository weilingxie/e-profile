export default (newsList, id) => {

    id = parseInt(id,10);
    if (newsList && id !== undefined && id !== null){
        return newsList.filter((news) => {
            const idMatch = news.source.id === id;
            if (idMatch)
                console.log(newsList[id]);
        
            return idMatch;
        });
    } else {
        return false;
    }   
  };