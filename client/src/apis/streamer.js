import axios from 'axios';

const streamer = axios.create({
  baseURL: 'http://localhost:3001'
});

export default streamer;
