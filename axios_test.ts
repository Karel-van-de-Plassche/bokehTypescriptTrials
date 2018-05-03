import axios from 'axios';
import {AxiosPromise} from "axios";

console.log(typeof axios);
console.log(axios);
const response: AxiosPromise = axios.get('/lessons', {
});
