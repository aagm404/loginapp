import React from 'react';
import { BackHandler, FlatList, Text, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getProductList } from '../../services/apiCalls';
import { SimpleLineIcons } from '@expo/vector-icons';

import ProductRow from '../../components/ProductRow';
import { Product } from '../../models/product';

import styles from './styles';

export default function HomePage() {

    const navigation = useNavigation();

    const route = useRoute();
    const object = route.params;
    const quotedToken = JSON.stringify(object);
    const token = quotedToken.substring(1,quotedToken.length - 1);

    const [products, setProducts] = React.useState<Product[]>();

    function logout(): void {
        navigation.reset({
            index: 0,
            routes: [{ name: "Login" }],
        });
    }
    
    React.useEffect(() => {
        getProducts();

        navigation.setOptions({
            headerLeft: () => (
                <SimpleLineIcons style={styles.logoutIcon} name="logout" size={24} color="black" onPress={logout}/>
            ),
            headerTitle:() => (
                <Text style={styles.headerTitle}>Produtos</Text>
            )
        });

        BackHandler.addEventListener('hardwareBackPress', () => {
            return true
        });

    },[]);

    async function getProducts() {
        await getProductList(token)
        .then(response => {
            setProducts(response.data);
        }).catch(error => {
            alert("Não foi possível obter os produtos");
            navigation.navigate("Login");
        });
    }
    
    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                style={styles.centerizedView}
                keyExtractor={(products) => products.id.toString()}
                renderItem={({ item }) => (
                    <ProductRow product={item} />
                )}
            />
        </View>
    );
}