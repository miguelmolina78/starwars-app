import axios from 'axios';

const baseURL = 'https://starwars-api-miguel.herokuapp.com';

export const getFilms = async () => {
    return axios.request({
        baseURL, 
        url: 'films'
    })
}

export const getFilmsById = async (id: number) => {
    return axios.request({
        baseURL, 
        url: `films/${id}`
    })
}
