import axios from 'axios'

const journalApi = axios.create({
    'baseURL': 'https://vue-demos-26ce5-default-rtdb.europe-west1.firebasedatabase.app'
})

journalApi.interceptors.request.use( (config) => {
    config.params = {
        auth: localStorage.getItem('idToken')
    }

    return config
})

export default journalApi