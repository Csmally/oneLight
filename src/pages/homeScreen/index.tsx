import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

function Home(): JSX.Element {
    const tabBarHeight = useBottomTabBarHeight();
    return (
        <View style={{backgroundColor: "#EDF0F1"}}>
            <ScrollView>
                {/* <StatusBar hidden={true}/> */}
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
            {/* <View style={styles.opacityBox}/> */}
        </View>
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

export default Home;