import axios from 'axios'

const authApi = axios.create({
    'baseURL': 'https://identitytoolkit.googleapis.com/v1/accounts',
    params: {
        key: 'AIzaSyC4ewF9zMr15YXQtorYYO4O-kSyBp2-E3Q'
    }
})

export default authApi