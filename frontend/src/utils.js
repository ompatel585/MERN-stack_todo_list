import {toast} from 'react-toastify';

export const notify = (message,type) =>{
    toast[type](message);
}

export const API_URL = 'https://mern-stack-todo-list-api.vercel.app'
