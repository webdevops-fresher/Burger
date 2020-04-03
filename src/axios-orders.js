import axios from 'axios';


const instance=axios.create({
    baseURL:'https://burgerqueen-21c31.firebaseio.com/'
});


export default instance;