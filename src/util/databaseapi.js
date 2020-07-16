let id = '666bc8478249be46838803dea2b5921a';


const callApi = {
    getListsMovies(term) {
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${id}&language=en-US&page=1&include_adult=false&query='${term}'?`)
            .then(response => response.json())
            .then(jsonResponse => {
                return jsonResponse.results;
            })
    },

    getTop20Movies(){
        return fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${id}&language=en-US&page=1`)
        .then(response => response.json())
            .then(jsonResponse => {
                return jsonResponse.results;
            })
    }
}

export default callApi;