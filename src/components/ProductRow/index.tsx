import React from "react";
import { Text, View } from "react-native";

import { Product } from "../../models/product";

import styles from "./styles";

interface Props {
    product: Product
}

export default function ProductRow(props: Props) {

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.text}>{props.product.name}</Text>
                <Text style={styles.text}>{props.product.factory}</Text>
            </View>
        </>
    );
}