const API_KEY = process.env.API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'

export default {
    fetchTrending:{
        title: 'Trending',
        url: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-Us`
    },
    fetchTopRated:{
        title: 'Top Rated',
        url: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-Us`
    },
    fetchAction:{
        title: 'Action',
        url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`
    },
    fetchComedy:{
        title: 'Comedy',
        url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`
    },
    fetchHorror:{
        title: 'Horror',
        url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`
    },
    fetchRomance:{
        title: 'Romance',
        url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`
    },
    fetchMystery:{
        title: 'Mystery',
        url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=9648`
    },
    fetchSciFi:{
        title: 'Sci-Fi',
        url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=878`
    },
    fetchWestern:{
        title: 'Western',
        url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=37`
    },
    fetchAnimation:{
        title: 'Animation',
        url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16`
    },
    fetchSeries:{
        title: 'TV Series',
        url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10770`
    },
    fetchDocumentries:{
        title: 'Documentries',
        url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`
    },

}