import axios from 'axios';

export default axios.create({
    baseURL: 'http://api.nextspa.test/',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
});