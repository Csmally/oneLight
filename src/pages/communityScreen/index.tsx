import { Text, View, StyleSheet } from 'react-native';

function CommunityScreen(): JSX.Element {
    return (
        <View style={styles.box}>
            <Text style={styles.content}>我是社区页</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#EDF0F1"
    },
    content: {
        fontSize: 22,
        fontWeight: '700',
    },
});

export default CommunityScreen;