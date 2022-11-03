import axios from "axios"
import { API_HOST } from '../../config'
import { getData } from '../../utils';

export const getOrders = () => (dispatch) => {
        getData('token').then(resToken => {
            axios.get(`${API_HOST}/transactions`, { 
                headers: { 
                    'Authorization' : resToken.value
                }
            }).then(res => {
                console.log('get Oreders: ', res);
                dispatch({type: 'SET_ORDERS', value: res.data.data.data})
            }).catch(err => {
                console.log('Erro get Oreders: ', err);
            })
            
        });
    }