import {showMessage} from '../../utils';

const { default: axios } = require("axios");
const { API_HOST } = require("../../config");

export const getFoodData = () => (dispatch) => {
    axios.get(`${API_HOST.url}/food`)
    .then((res) => {
        console.log('Res : ', res);
        dispatch({ type: 'SET_FOOD', value: res.data.data.data});
    }).catch((err) => {
        showMessage(
            console.log('Error : ', err)
            `${err?.response?.data?.message} on Food API` || 'TErjadi Kesalahan di API FOOD',
        );
    });
};

export const getFoodDataByTypes = (types) => (dispatch) => {
    axios.get(`${API_HOST.url}/food?types=${types}`)
    .then((res) => {
        console.log('Res : ', res);

        if (types === 'new_food') {
            
            dispatch({ type: 'SET_NEW_TASTE', value: res.data.data.data});
            
        }

        if (types === 'popular') {
            
            dispatch({ type: 'SET_POPULAR', value: res.data.data.data});

        }

        if (types === 'recommended') {
            
            dispatch({ type: 'SET_RECOMMENDED', value: res.data.data.data});

        }

    }).catch((err) => {
        showMessage(
            console.log('Error : ', err)
            `${err?.response?.data?.message} on Food by Types API` || 'TErjadi Kesalahan di API FOOD',
        );
    });
};