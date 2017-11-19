import axios from 'axios';

export const API = axios.create({
    baseURL: `http://api.icndb.com/jokes/random/10`
})