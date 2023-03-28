import { Text, View, StyleSheet } from 'react-native';

function MineScreen(): JSX.Element {
    return (
        <View style={styles.box}>
            <Text style={styles.content}>我是个人页</Text>
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
});

export default MineScreen;