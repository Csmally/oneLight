import { Text, View, StyleSheet, Image } from 'react-native';
import { getViewSize, getFontSize } from '@/utils/sizeTool';

function OrdersScreen(): JSX.Element {
    return (
        <View style={styles.page}>
            <View style={styles.test}/>
            <Text style={styles.content}>我是订单页</Text>
            <Image source={{uri:'https://tuchuangs.com/imgs/2023/04/02/f79365c7f272f4c3.jpeg'}} style={styles.testImg}/>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EDF0F1'
    },
    content: {
        fontSize: getFontSize(22),
        fontWeight: '700',
    },
    test: {
        width:getViewSize(80),
        height: getViewSize(80),
        borderRadius: getViewSize(40),
        backgroundColor: "white",
        marginBottom: getViewSize(50),
        shadowColor: "#333333",
        shadowOffset: {
            width: getViewSize(3),
            height: getViewSize(5)
        },
        shadowRadius: getViewSize(6),
        shadowOpacity: 0.5
    },
    testImg: {
        width: getViewSize(300),
        height: getViewSize(200)
    }
});

export default OrdersScreen;