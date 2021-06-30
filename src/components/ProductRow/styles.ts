import { StyleSheet } from "react-native";

export default StyleSheet.create({

    productContainer: {
        backgroundColor: '#fff',
        marginTop: 6,
        paddingVertical: 5,
        paddingHorizontal: 5,
    },

    productView: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#fff',
        paddingVertical: 6,
        paddingHorizontal: 8,
    },

    productImage: {
        width: 60,
        height: 50,
        alignSelf: 'center',
    },

    productMiddleView: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        paddingHorizontal: 10,
        justifyContent: 'center',
    },

    productName: {
        fontSize: 20,
        fontWeight: '700',
    },

    productFactoryName: {
        fontSize: 12,
        fontWeight: '300',
    },

    productRightView: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    productPrice: {
        alignSelf: 'flex-end',
        paddingRight: 10,
        fontSize: 20,
        fontWeight: '700',
    },

    productAmount: {
        fontSize: 12,
        fontWeight: '300',
    },
});