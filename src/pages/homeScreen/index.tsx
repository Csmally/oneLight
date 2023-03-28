import { Text, View, StyleSheet, ScrollView } from 'react-native';

function HomeScreen(): JSX.Element {
    return (
        <ScrollView>
            <View>
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
    }
});

export default HomeScreen;