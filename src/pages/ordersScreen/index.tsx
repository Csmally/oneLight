import { Text, View, StyleSheet, Image } from 'react-native';

function OrdersScreen(): JSX.Element {
    return (
        <View style={styles.box}>
            <View style={styles.test}/>
            <Text style={styles.content}>我是订单页</Text>
            <Image source={{uri:'https://tuchuangs.com/imgs/2023/04/02/f79365c7f272f4c3.jpeg'}} style={styles.testImg}/>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink'
    },
    content: {
        fontSize: 22,
        fontWeight: '700',
    },
    test: {
        width:80,
        height: 80,
        borderRadius: 40,
        backgroundColor: "white",
        marginBottom: 50,
        shadowColor: "black",
        shadowOffset: {
            width: 3,
            height: 5
        },
        shadowRadius: 6,
        shadowOpacity: 0.5
    },
    testImg: {
        width: 300,
        height: 200
    }
});

export default OrdersScreen;