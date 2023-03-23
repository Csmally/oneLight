import { StyleSheet, Text, TouchableOpacity, View, Platform } from "react-native"
import { BlurView } from "@react-native-community/blur"
import BarIcon from "./barIcon"

function CustomTabBar({ state, descriptors, navigation }): JSX.Element {
    console.log('9898state', state)
    console.log('9898descriptors', descriptors)
    console.log('9898navigation', navigation)
    return (
        <View style={styles.tabBarBox}>
            <BlurView style={styles.tabBarBlur} blurType={Platform.OS === "ios" ? "prominent" : "xlight"} blurAmount={100} reducedTransparencyFallbackColor="white" />
            <View style={styles.tabBarContent}>
                {
                    state.routes.map((route, index: number) => {
                        const { options } = descriptors[route.key];
                        const isFocused = state.index === index;
                        const onPress = () => {
                            const event = navigation.emit({
                                type: 'tabPress',
                                target: route.key,
                            });

                            if (!isFocused && !event.defaultPrevented) {
                                navigation.navigate(route.name);
                            }
                        }
                        return (
                            <View style={styles.tabBarItem} key={index}>
                                <TouchableOpacity onPress={onPress}>
                                    <BarIcon isFocused={isFocused} pathName={route.name}/>
                                    <Text>{options.title}</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    tabBarBox: {
        overflow: "hidden",
        height: 80,
        position: 'absolute',
        right: 20,
        bottom: 20,
        left: 20,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.5,
        elevation: 5
    },
    tabBarBlur: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },
    tabBarContent: {
        flex: 1,
        flexDirection: "row",
    },
    tabBarItem: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default CustomTabBar