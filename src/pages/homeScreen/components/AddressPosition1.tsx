import { Image, Text, StyleSheet, Animated } from "react-native"
import { getFontSize, getViewSize } from "@/utils/sizeTool"

function AddressPosition(props: any): JSX.Element {
    const { scrollDistance, isAnimatedMid, scrollMidDistance } = props
    const toLocationPage = () => {
        console.log('9898我要位置选择页啦')
    }
    return (
        <Animated.View
            style={[
                styles.container,
                isAnimatedMid ? { width: getViewSize(60) } : {},
                {
                    transform: [
                        {
                            translateY: scrollDistance.interpolate({
                                inputRange: [0, scrollMidDistance],
                                outputRange: [0, getViewSize(6)],
                                extrapolate: 'clamp'
                            })

                        },
                    ]
                }
            ]}
        >
            <Image source={require("@/static/locationPosition.png")} style={[styles.locationImg, { tintColor: isAnimatedMid ? '#333333' : '#ffffff' }]} />
            <Text style={[styles.addressText, isAnimatedMid ? { color: '#333333', } : {}]} onPress={toLocationPage} numberOfLines={1}>北京天安门升国旗仪式北京天安门升国旗仪式</Text>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: getViewSize(160),
        height: getViewSize(28),
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
    },
    locationImg: {
        width: getViewSize(20),
        height: getViewSize(20)
    },
    addressText: {
        color: '#fff',
        fontSize: getFontSize(14),
        fontWeight: '500',
        marginLeft: getViewSize(5)
    }
})
export default AddressPosition