import { Text, View, StyleSheet } from 'react-native';

function Orders(): JSX.Element {
    return (
        <View style={styles.box}>
            <View style={styles.test}/>
            <Text style={styles.content}>我是订单页</Text>
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
    }
});

export default Orders;