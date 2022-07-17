const api_key = 'c82a51649f84c362c3afc38d8b5bbf46'

const requests = {
    requestPopular : `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`,
    requestTopRated : `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`,
    requestTrending : `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=2`,
    requestHorror : `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&page=1&include_adult=false`,
    requestUpComing : `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`,
}




export default requests