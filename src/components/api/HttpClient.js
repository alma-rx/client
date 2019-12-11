import axios from 'axios';


export default axios.create({

    baseURL: 'http://api.almarx.com',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem("Authontication")

    }
});
