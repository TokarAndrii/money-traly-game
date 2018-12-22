import axios from 'axios'

const BASE_URL = 'http://localhost:8080/api/v1/sendmail';

let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
};

const sendDataToBackEnd = (data) => {
    console.log('sendDataToBackEnd')
    return axios.post(`${BASE_URL}`, data, axiosConfig)
        .then(resp => {
            return resp;
        })
        .catch(err => { throw err })
}


export { sendDataToBackEnd };