import axios from 'axios';


export default axios.create({

    baseURL: 'http://dev.almarx.com',
    headers: {
        'Content-Type': 'application/json'
    }
});
