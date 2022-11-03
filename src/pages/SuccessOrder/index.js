import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Gap, Button} from '../../components'
import {IlSuccessOrder} from '../../assets'

const SuccesOrder = ({navigation}) => {
    return (
        <View style={styles.page}>
            <IlSuccessOrder/>
            <Gap height={30} />
            <Text style={styles.title}>You’ve Made Order</Text>
            <Gap height={6} />
            <Text style={styles.subTitle}>Just stay at home while we are</Text>
            <Text style={styles.subTitle}>preparing your best foods</Text>
            <Gap height={30}/>

            <View style={styles.buttonContainer}>
                <Button 
                    text="Order Other Foods"
                    onPress={() => navigation.replace('MainApp')}
                />
            </View>

            <Gap height={12}/>

            <View style={styles.buttonContainer}>
                <Button 
                    text="View My Order"
                    color="#8D92A3"
                    textColor="white"
                    onPress={() => navigation.replace('MainApp', {screen: 'Order'})}
                />
            </View>

        </View>
    );
};

export default SuccesOrder

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },

    title: {
        fontSize: 20,
        fontFamily: 'Poppins-Regular',
        color: '#020202'
    },

    subTitle: {
        fontSize: 14,
        fontFamily: 'Poppins-Light',
        color: '#8D92A3',
    },

    buttonContainer: {
        width: '100%',
        paddingHorizontal: 80,
    }
});
