import { Text, View, StyleSheet } from 'react-native';

function Orders(): JSX.Element {
    return (
        <View style={styles.box}>
            <Text style={styles.content}>我是订单页</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        fontSize: 22,
        fontWeight: '700',
    },
});

export default Orders;