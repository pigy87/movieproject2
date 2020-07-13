let id = '666bc8478249be46838803dea2b5921a';


const databaseApi = {
    getListsMovies(term) {
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${id}&language=en-US&page=1&include_adult=false&query='${term}'?`)
            .then(response => response.json())
            .then(jsonResponse => {
                return jsonResponse.results;
            })
    }
}

export default databaseApi;