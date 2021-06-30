import React from "react";
import { ScrollView, Text, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Product } from "../../models/product";

import styles from "./styles";

interface Props {
    product: Product
}

export default function ProductRow(props: Props) {

    return (
        <View style={styles.productContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.productView}>
                    <MaterialCommunityIcons style={styles.productImage} name="cellphone" size={50} color="black" />
                    <View style={styles.productMiddleView}>
                        <Text style={styles.productName}>{props.product.name}</Text>
                        <Text style={styles.productFactoryName}>{props.product.factory.name}</Text>
                    </View>
                    <View style={styles.productRightView}>
                        <Text style={styles.productPrice}>{`R$ ${props.product.price}`}</Text>
                        <Text style={styles.productAmount}>{`${props.product.amount} itens`}</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}