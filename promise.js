// Axios nos ayuda a realizar peticiones http sin necesitar AJAX

import axios from 'axios';

export const getDataFromAPI = (url) => {
    return axios.get(url)
    .then(({data}) => {
        return data;
    });
}
