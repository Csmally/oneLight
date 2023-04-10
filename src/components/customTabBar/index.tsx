import { StyleSheet, Text, TouchableOpacity, View, Platform } from "react-native"
import { BlurView } from "@react-native-community/blur"
import BarIcon from "./barIcon"
import LinearGradient from "react-native-linear-gradient"
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

function CustomTabBar(props: BottomTabBarProps): JSX.Element {
    const { state, descriptors, navigation } = props
    return (
        <LinearGradient colors={['rgba(237,240,241, 0)', 'rgba(237,240,241, 0.3)', 'rgba(237,240,241, 0.6)', 'rgba(237,240,241, 1)']} locations={[0, 0.3, 0.7, 1]} style={styles.tabBarBox}>
            <View style={[styles.innerBox, { overflow: "hidden" }]}>
                <BlurView style={styles.blurView} blurType="xlight" blurAmount={100} reducedTransparencyFallbackColor="balck" />
                <View style={styles.tabBarContent}>
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
                                        <BarIcon isFocused={isFocused} pathName={route.name} />
                                        <Text>{options.title}</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        })
                    }
                </View>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    tabBarBox: {
        height: '12%',
        position: 'absolute',
        right: 0,
        bottom: 0,
        left: 0
    },
    innerBox: {
        position: 'absolute',
        top: 0,
        right: '5%',
        bottom: '25%',
        left: '5%',
        borderRadius: 20
    },
    blurView: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
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