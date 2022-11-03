import axios from 'axios';
import { showMessage, storeData } from '../../utils';
import { setLoading } from './global';
import { API_HOST } from '../../config';


export const singUpAction = (dataRegister, photoReducer, navigation) => (dispatch) => {
    axios.post(`${API_HOST.url}/register`, dataRegister)
       .then((res) => {
           console.log('data Success :', res.data);

           //data User
           const profileData = res.data.data.user;
            
           //data Token
           const token = `${res.data.data.token_type}  ${res.data.data.access_token}`;
           storeData('token', {value: token});
        //    console.log('isUpload: ',photoReducer.isUploadPhoto)

        console.log('hasil isUploadPhoto: ',photoReducer.isUploadPhoto);
           if (photoReducer.isUploadPhoto) {

               const photoForUpload = new FormData();
               photoForUpload.append('file', photoReducer);
       
               axios.post(`${API_HOST.url}/user/photo`, photoForUpload, 
               {
                    headers: {
                        Authorization : token,
                       'Content-Type': 'multipart/form-data',
                       
                   },
               }).then(resUpload => {
                // profileData.profile_photo_url = `${API_HOST}/storage/${resUpload.data.data[0]}`
                storeData('userProfile', profileData);
                // console.log('upload :', resUpload);
                navigation.reset({index: 0, routes: [{name: 'SuccessSignUp'}]});

               })
               .catch((err) => {
                   console.log('Error :', err);
                   showMessage(err?.response?.message ||'Upload Photo Tidak Berhasil');
                   navigation.reset({index: 0, routes: [{name: 'SuccessSignUp'}]});
               });
           } else {
                storeData('userProfile', profileData);
                navigation.reset({index: 0, routes: [{name: 'SuccessSignUp'}]});
           }

           dispatch(setLoading(false));
       })
       .catch((err) => {
            console.log('Sign Up Error :', err.response.data.message);
            dispatch(setLoading(false));
            showMessage(err?.response?.message ||'Error Sign Up');
       });
}

export const signInAction = (form, navigation) => (dispatch) => {
    dispatch(setLoading(false));

    Axios.post(`${API_HOST.url}/login`, form).then((res) => {
        const profile = res.data.data.user;
        const token = `${res.data.data.token_type}  ${res.data.data.access_token}`;

        dispatch(setLoading(false));
        storeData('token', {value: token});
        storeData('userProfile', profileData);
            console.log('success', res);

            navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
        }).catch((err) => {
            console.log('error', err);

            dispatch(setLoading(false));
            showMessage(err?.response?.message ||'Error Sign Up');
        });
}