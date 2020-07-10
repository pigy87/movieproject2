let id = '666bc8478249be46838803dea2b5921a';
let query = '';

const databaseApi = {
    queryWord(term){
        query=term;
    },

    getListsMovies(){return fetch(`https://api.themoviedb.org/3/search/multi?api_key=${id}&language=en-US&page=1&include_adult=false&query='${query}'?`)
   .then(response=>response.json())
   .then(jsonResponse=>{      
       return jsonResponse.results;
    })
}
}

export default databaseApi;