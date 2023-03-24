import { StyleSheet, Text, TouchableOpacity, View, Platform } from "react-native"
import { BlurView } from "@react-native-community/blur"
import BarIcon from "./barIcon"
import LinearGradient from "react-native-linear-gradient"
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

function CustomTabBar(props: BottomTabBarProps): JSX.Element {
    const { state, descriptors, navigation } = props
    return (
        <LinearGradient colors={[ 'rgba(237,240,241, 0)' , 'rgba(237,240,241, 0.8)', 'rgba(237,240,241, 0.9)',  'rgba(237,240,241, 1)' ]} locations={[0.1,0.2,0.3,1]} style={styles.tabBarBox}>
            <BlurView style={styles.tabBarBlur} blurType={Platform.OS === "ios" ? "prominent" : "xlight"} blurAmount={100} reducedTransparencyFallbackColor="white" />
            <View style={[styles.tabBarContent,styles.tabBarBlur]}>
                {
                    state.routes.map((route, index: number) => {
                        const { options } = descriptors[route.key];
                        const isFocused = state.index === index;
                        const onPress = () => {
                            const event = navigation.emit({
                                type: 'tabPress',
                                target: route.key,
                                canPreventDefault: true
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
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    tabBarBox: {
        overflow: "hidden",
        height: 100,
        position: 'absolute',
        right: 0,
        bottom: 0,
        left: 0
    },
    tabBarBlur: {
        position: 'absolute',
        top: 0,
        right: 20,
        bottom: 20,
        left: 20,
        borderRadius: 20,
    },
    tabBarContent: {
        flex: 1,
        flexDirection: "row"
    },
    tabBarItem: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default CustomTabBar