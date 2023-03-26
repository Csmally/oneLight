import { Text, View, StyleSheet, ScrollView } from 'react-native';

function HomeScreen(): JSX.Element {
    return (
        <ScrollView>
            <View style={{ paddingBottom: 100 }}>
                <View style={[styles.test, { backgroundColor: "red" }]}>
                    <Text style={styles.textSize}>上岛咖啡你就是那份感觉开始上岛咖啡你就是那份感觉开始上岛咖啡你就是那份感觉开始上岛咖啡你就是那份感觉开始上岛咖啡你就是那份感觉开始上岛咖啡你就是那份感觉开始上岛咖啡你就是那份感觉开始上岛咖啡你就始上岛咖啡你就是那份感觉开始上岛咖啡你就始上岛咖啡你就是那份感觉开始上岛咖啡你就</Text>
                </View>
                <View style={[styles.test, { backgroundColor: "yellow" }]}>
                    <Text style={styles.textSize}>123243567812324356781232435678123243567812324356781232435678123243567812324356781232435678123243567812324356781232435678123243567812324356781232435678123243567812324356781232435678123243567812324356781232435678123243567812324356781232435678</Text>
                </View>
                <View style={[styles.test, { backgroundColor: "blue" }]}>
                    <Text style={styles.textSize}>上岛咖啡你就是那份感觉开始上岛咖啡你就是那份感觉开始上岛咖啡你就是那份感觉开始上岛咖啡你就是那份感觉开始上岛咖啡你就是那份感觉开始上岛咖啡你就是那份感觉开始上岛咖啡你就是那份感觉开始上岛咖啡你就始上岛咖啡你就是那份感觉开始上岛咖啡你就始上岛咖啡你就是那份感觉开始上岛咖啡你就</Text>
                </View>
                <View style={[styles.test, { backgroundColor: "green" }]}>
                    <Text style={styles.textSize}>上岛咖啡你就是那份感觉开始上岛咖啡你就是那份感觉开始上岛咖啡你就是那份感觉开始上岛咖啡你就是那份感觉开始上岛咖啡你就是那份感觉开始上岛咖啡你就是那份感觉开始上岛咖啡你就是那份感觉开始上岛咖啡你就始上岛咖啡你就是那份感觉开始上岛咖啡你就始上岛咖啡你就是那份感觉开始上岛咖啡你就</Text>
                </View>
                <View style={[styles.test, { backgroundColor: "pink" }]}>
                    <Text style={styles.textSize}>上岛咖啡你就是那份感觉开始上岛咖啡你就是那份感觉开始上岛咖啡你就是那份感觉开始上岛咖啡你就是那份感觉开始上岛咖啡你就是那份感觉开始上岛咖啡你就是那份感觉开始上岛咖啡你就是那份感觉开始上岛咖啡你就始上岛咖啡你就是那份感觉开始上岛咖啡你就始上岛咖啡你就是那份感觉开始上岛咖啡你就</Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    test: {
        height: 250
    },
    textSize: {
        fontSize: 30
    },
    opacityBox: {
        opacity: 0.9,
        height: 100,
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "white"
    }
});

export default HomeScreen;