import axios from 'axios'

const apiKey = process.env.VUE_APP_APIKEY
const authApi = axios.create({
    'baseURL': 'https://identitytoolkit.googleapis.com/v1/accounts',
    params: {
        key: apiKey
    }
})

export default authApi