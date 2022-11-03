import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { Button, Gap, Header, Select, TextInput } from '../../components'
import { useForm, showMessage } from '../../utils';
import { useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';
import { setLoading, singUpAction } from '../../redux/action';


const SignUpAddress = ({navigation}) => {

    const [form, setForm] = useForm({
            phoneNumber: '',
            address: '',
            houseNumber: '',
            city: 'Jakarta',
    });

    const dispatch = useDispatch();
    const {registerReducer, photoReducer} = useSelector((state) => state);

   const onSubmit = () => {
    //    console.log('form :', form);
       const data = {
           ...form,
           ...registerReducer
       };
    //    console.log('data register :', data);

       dispatch(setLoading(true));
       dispatch(singUpAction(data, photoReducer, navigation));

    //    Axios.post('http://10.0.2.2:8000/api/register', data)
    //    .then((res) => {
    //        console.log('data Success :', res.data);
    //         console.log('isUpload :', photoReducer.isUploadPhoto);
    //        if (photoReducer.isUploadPhoto) {

    //            const photoForUpload = new FormData();
    //            photoForUpload.append('file', photoReducer);
       
    //            Axios.post('http://10.0.2.2:8000/api/user/photo', photoForUpload, 
    //            {
    //                 headers: {
    //                     Authorization : `${res.data.data.token_type}  ${res.data.data.access_token}`,
    //                    'Content-Type': 'multipart/form-data',
    //                },
    //            })
    //            .then((resUpload) => {
    //                console.log('Upload Success :', resUpload);
    //            })
    //            .catch((err) => {
    //             //    console.log('Error :', err);
    //                showMessage(err?.response?.message ||'Upload Photo Tidak Berhasil')
    //            });
    //        };

    //        dispatch(setLoading(false));
    //         showMessage('Register Success', 'success');
    //           navigation.replace('SuccessSignUp');
    //    })
    //    .catch((err) => {
    //         console.log('Sign Up Error :', err.response.data.message);
    //         dispatch(setLoading(false));
    //         showMessage(err?.response?.message ||'Error Sign Up');
    //    });
   };

//    const showToast = (message, type) => {
//     showMessage({
//         message,
//         type: type === 'success' ? 'success' : 'danger',
//         backgroundColor: type === 'success' ? '#1ABD9C' : '#D9435E',
//       });
//    }

    return (

        <ScrollView contentContainerStyle={styles.scroll}>

            <View style={styles.page}>
            <Header 
                title="Address"
                subTitle="Make Sure It's Valid"
                onBack={() => navigation.goBack()}
            />
            <View style={styles.container}>

                <TextInput 
                    label="Phone No."
                    placeholder="Type Your Phone Number"
                    value= {form.phoneNumber}
                    onChangeText={(value) => setForm('phoneNumber', value)}
                />
                <Gap height={16} />

                <TextInput 
                    label="Address"
                    placeholder="Type Your Address"
                    value= {form.address}
                    onChangeText={(value) => setForm('address', value)}
                />
                <Gap height={16} />

                <TextInput 
                    label="House No."
                    placeholder="Type Your House Number"
                    value= {form.houseNumber}
                    onChangeText={(value) => setForm('houseNumber', value)}        
                />
                <Gap height={16} />

                <Select
                    label="City"
                    value= {form.city}
                    onSelectChange={(value) => setForm('city', value)}
                />

                <Gap height={24} />
                <Button 
                    text="Sign Up Now"
                    onPress={onSubmit}
                />

            </View>

        </View>

    </ScrollView>

    );
};

export default SignUpAddress;

const styles = StyleSheet.create({
    scroll: {
        flexGrow: 1,
    },
    
    page: {flex: 1,},

    container: {
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingVertical: 26,
        marginTop: 24,
        flex: 1,
    },

});
