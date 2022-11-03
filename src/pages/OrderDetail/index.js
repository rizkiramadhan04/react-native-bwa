import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { FoodDummy2 } from '../../assets'
import {Button, Gap, Header, ItemListFood, ItemValue} from '../../components'

const OrderDetail = ({navigation}) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>

            <Header
                title="Order Detail"
                subTitle="You deserve better meal"
                onBack={() => navigation.goBack()}
            />

            <View style={styles.content}>
                <Text style={styles.label}>Item Order</Text>
                <ItemListFood
                    image={FoodDummy2}
                    name="Burger Tamayo"
                    price={35000}
                    items={10}
                    type="order-summary"
                />

                <Text style={styles.label}>Details Transaction</Text>
                <ItemValue label="Driver" value={13000} type="currency"/>
                <ItemValue label="Tax 10%" value={10000} type="currency"/>
                <ItemValue
                    label="Total Price" 
                    value={100000}
                    valueColor="#1ABC9C" 
                    type="currency"
                />
            </View>

            <View style={styles.content}>
                <Text style={styles.label}>Deliver To :</Text>
                <ItemValue label="Name" value="Rizki Ramadhan" />
                <ItemValue label="Phone No" value="081522901292" />
                <ItemValue label="Address" value="Jl. Mangga Besar II" />
                <ItemValue label="House No." value="12" />
                <ItemValue label="City" value="Jakarta Pusat" />
            </View>

            <View style={styles.content}>
                <Text style={styles.label}>Order Status :</Text>
                <ItemValue label="#FM209391" value="Paid" valueColor="#1ABC9C" />
            </View>

            <View style={styles.button}>
                <Button 
                text="Cancel Order" 
                onPress={() => navigation.replace('SuccessOrder')}
                color="#D9435E"
                textColor="white"
                />
            </View>

            <Gap height={40}/>

        </ScrollView>
    );
};

export default OrderDetail;

const styles = StyleSheet.create({
    content: {
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingVertical: 16,
        marginTop: 24,
    },

    label: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: '#020202',
        marginBottom: 8,
    },

    button: {
        paddingHorizontal: 24,
        marginTop: 24,
    }
});
