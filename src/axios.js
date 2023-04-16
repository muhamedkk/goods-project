import axios from 'axios';

 const _axios = axios.create({
  baseURL: 'https://de16-88-229-109-128.ngrok-free.app'
});

export default _axios;