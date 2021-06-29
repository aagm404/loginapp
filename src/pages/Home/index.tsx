import React from 'react';
import { FlatList, Text, View } from 'react-native';
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

    const [products, setProducts] = React.useState<Product[]>();
    
    React.useEffect(() => {
        getProducts().then(list => setProducts(list));
    },[]);

    async function getProducts() {
        const { data } = await getProductList().get('');
        const obj: Product[] = data;
        return obj;
    }

    return (
        <View style={styles.container}>
           <Text>Os produtos deveriam serem exibidos aqui!!!</Text>
        </View>
    );

    //
    // return (
    //     <View style={styles.container}>
    //         <FlatList
    //             data={products}
    //             style={styles.list}
    //             keyExtractor={(product) => product.id.toString()}
    //             renderItem={({ item }) => (
    //                 <ProductRow product={item} />
    //             )}
    //         />
    //     </View>
    // );
}