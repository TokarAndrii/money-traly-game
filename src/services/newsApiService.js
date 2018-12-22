import axios from 'axios'

const BASE_URL = 'http://localhost:8080/api/v1/news';

let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
};

const getAllNews = () => axios.get(`${BASE_URL}`, axiosConfig)
    .then(resp => resp.data)
    .catch(err => { throw err });

const getNewsById = id => axios.get(`${BASE_URL}/${id}`, axiosConfig)
    .then(resp => {
        return resp.data[0]
    })
    .catch(err => { throw err });

export { getAllNews, getNewsById };