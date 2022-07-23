import axios from 'axios';

const instance = axios.create({
     baseURL : 'https://react-burger-34f8e-default-rtdb.firebaseio.com/'
})

export default instance;