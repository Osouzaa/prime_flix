import axios from "axios";

// BASE DA URL: https://api.themoviedb.org/3/

// URL DA API : https://api.themoviedb.org/3/movie/now_playing?api_key=84665a7e4c01d63c5e8914169c7f49c2&language=pt-BR


const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
})

export default api