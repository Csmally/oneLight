import { Text, View, StyleSheet } from 'react-native';
import { getFontSize, getViewSize } from '@/utils/sizeTool';
import { PixelRatio } from 'react-native';

function MineScreen(): JSX.Element {
    return (
        <View style={styles.box}>
            {/* <Text style={styles.content}>我是个人页</Text> */}
            <View style={styles.test2}></View>
            <Text style={styles.test3}>字</Text>
            <View style={styles.test5}></View>
            <Text style={styles.test4}>字</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'greenyellow'
    },
    content: {
        fontSize: 22,
        fontWeight: '700',
    },
    test2: {
        width: 100,
        height: 100,
        backgroundColor: 'pink'
    },
    test3: {
        fontSize: 14
    },
    test4: {
        fontSize: getFontSize(14)
    },
    test5: {
        width: getViewSize(100),
        height: getViewSize(100),
        backgroundColor: 'blue'
    }
});

export default MineScreen;