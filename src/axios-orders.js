import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-burger-86a8c.firebaseio.com/'
});

export default instance;