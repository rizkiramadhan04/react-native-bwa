import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { Header, TextInput, Gap, Select, Button } from '../../components'

const EditProfile = ({navigation}) => {
    return (

        <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>

            <View style={styles.page}>
            <Header 
                title="Edit Profile"
                subTitle="Update Your Profile"
                onBack={() => navigation.goBack()}
            />
            <View style={styles.container}>
                
                <TextInput 
                    label="Full Name"
                    placeholder="Type Your Full Name"              
                />
                <Gap height={16} />

                <TextInput 
                    label="Email Address"
                    placeholder="Type Your Email Address"             
                />
                <Gap height={16} />

                <TextInput 
                    label="Phone No."
                    placeholder="Type Your Phone Number"              
                />
                <Gap height={16} />

                <TextInput 
                    label="Address"
                    placeholder="Type Your Address"             
                />
                <Gap height={16} />

                <TextInput 
                    label="House No."
                    placeholder="Type Your House Number"        
                />
                <Gap height={16} />

                <Select
                    label="City"
                />

                <Gap height={24} />
                <Button 
                    text="Update"
                    onPress={() => navigation.navigate('SuccessSignUp')}
                />

            </View>

        </View>

    </ScrollView>

    );
};

export default EditProfile;

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
