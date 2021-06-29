import React from 'react';
import { FlatList, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { getProductList } from '../../services/apiCalls';

import ProductRow from '../../components/ProductRow';
import { Product } from '../../models/product';

import styles from './styles';

export default function HomePage() {

    const route = useRoute();
    const object = route.params;
    const quotedToken = JSON.stringify(object);
    const token = quotedToken.substring(1,quotedToken.length - 1);
    console.log(token)

    const [products, setProducts] = React.useState<Product[]>();

    React.useEffect(() => {
        getProducts();
    },[]);

    async function getProducts() {
        console.log("Oi");
        await getProductList(token)
        .then(response => {
            console.log(`ProductList response status: ${response.status}`);
            console.log(`ProductList response data: ${response.data}`);
            console.log("Aqui1");
            console.log(response.data)
            console.log("Aqui2");
            const { items } = response.data
            console.log("Aqui3");
            console.log(items);
            setProducts(items);
            console.log("Aqui4");
            console.log(products);
            console.log("Aqui5");
        }).catch(error => {
            console.log(`ProductList error status: ${error.response.status}`);
            console.log(`ProductList error message: ${error.response.data}`);
            alert("Ocorreu um erro ao carregar os produtos")
            setProducts([]);
        });
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                style={styles.list}
                keyExtractor={(product) => product.id.toString()}
                renderItem={({ item }) => (
                    <ProductRow product={item} />
                )}
            />
        </View>
    );
}