import axios from 'axios';

const API_URL = 'http://https://association-jil-alghad-su0e.onrender.com/api/news';

export const getNews = () => axios.get(API_URL);
export const createNews = (data) => axios.post(API_URL, data);
export const updateNews = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteNews = (id) => axios.delete(`${API_URL}/${id}`);
