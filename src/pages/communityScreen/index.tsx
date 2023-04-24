import { Text, View, StyleSheet } from 'react-native';
import { getFontSize } from "@/utils/sizeTool"

function CommunityScreen(): JSX.Element {
    return (
        <View style={styles.page}>
            <Text style={styles.content}>我是社区页</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#EDF0F1",
    },
    content: {
        fontSize: getFontSize(22),
        fontWeight: '700',
    },
});

export default CommunityScreen;