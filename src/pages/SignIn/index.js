import React, {useState, useEffect} from 'react';
import Axios from 'axios'
import { View, Text, StyleSheet } from 'react-native';
import {Button, Gap, TextInput, Header} from '../../components';
import { getData, useForm } from '../../utils';
import { useDispatch } from 'react-redux';
import { signInAction } from '../../redux/action/auth';


const SignIn = ({navigation}) => {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState(''); membuat input data didalam local state

    const [form, setForm] = useForm({
        email: '',
        password: '',
    });

    const dispatch = useDispatch();

    const onSubmit = () => {
        dispatch(signInAction(form, navigation));
       
        // console.log('form: ', form);
        // Axios.post('http://10.0.2.2:8000/api/login', form).then((res) => {
        //     console.log('success', res);
        // }).catch((err) => {
        //     console.log('error', err);
        // });
    };

    return (
        <View style={styles.page}>

        <Header 
        title="Sign In" 
        subTitle="Find your best ever meal"
        />

            <View style={styles.container}>
                <TextInput 
                    label="Email Address"
                    placeholder="Type your email address"
                    value={form.email}
                    onChangeText={(value) => setForm('email', value)}
                />
                <Gap height={16} />

                <TextInput 
                    label="Password"
                    placeholder="Type your Password"
                    value={form.password}
                    onChangeText={(value) => setForm('password', value)}
                    secureTextEntry
                />
                <Gap height={24} />

                <Button 
                text="Sign In"  
                onPress={onSubmit}
                />
                <Gap height={12} />

                <Button 
                    text="Create New Account"
                    color='#8D92A3'
                    textColor="white"
                   onPress={() => navigation.navigate('SignUp')}
                />
            </View>
        </View>
    );
};

export default SignIn;

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },

    container: {
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingVertical: 26,
        marginTop: 24,
        flex: 1,
    }
});