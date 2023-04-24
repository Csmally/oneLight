import { Image, Text, StyleSheet, Animated } from "react-native"
import { getFontSize, getViewSize } from "@/utils/sizeTool"
import { useEffect, useRef } from "react"

function AddressPosition(props: any): JSX.Element {
    const { scrollDistance, isAnimatedMid, allAnimatedDistance } = props
    const toLocationPage = () => {
        console.log('9898我要位置选择页啦')
    }
    const containerWidth = useRef(new Animated.Value(getViewSize(160))).current;
    useEffect(() => {
        if (isAnimatedMid) {
            containerWidth.setValue(getViewSize(65))
        }else{
            containerWidth.setValue(getViewSize(160))
        }
    }, [isAnimatedMid])
    return (
        <Animated.View
            style={[
                styles.container,
                {
                    transform: [
                        {
                            translateY: scrollDistance.interpolate({
                                inputRange: [0, allAnimatedDistance],
                                outputRange: [0, getViewSize(6)],
                                extrapolate: 'clamp'
                            })
                        },
                    ],
                    width: containerWidth
                }
            ]}>
            <Animated.Image
                source={require("@/static/locationPosition.png")}
                style={[
                    styles.locationImg,
                    // // tintColor: isAnimatedMid ? '#333333' : '#ffffff'
                    {
                        tintColor: scrollDistance.interpolate({
                            // inputRange: [0, allAnimatedDistance],
                            inputRange: [0, allAnimatedDistance],
                            outputRange: ['rgb(255,255,255)', 'rgb(0,0,0)']
                            // outputRange: [0, getViewSize(6)],
                            // extrapolate: 'extend'
                        })
                    }
                ]} />
            <Animated.Text
                style={[
                    styles.addressText,
                    // isAnimatedMid ? { color: '#333333', } : {},
                    {
                        color: scrollDistance.interpolate({
                            // inputRange: [0, allAnimatedDistance],
                            inputRange: [0, allAnimatedDistance],
                            outputRange: ['rgb(255,255,255)', 'rgb(0,0,0)']
                            // outputRange: [0, getViewSize(6)],
                            // extrapolate: 'extend'
                        })
                    }
                ]}
                onPress={toLocationPage}
                numberOfLines={1}>
                北京天安门升国旗仪式北京天安门升国旗仪式
            </Animated.Text>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        // width: getViewSize(160),
        height: getViewSize(28),
        display: "flex",
        flexDirection: "row",
        alignItems: 'center'
    },
    locationImg: {
        width: getViewSize(20),
        height: getViewSize(20),
        // backgroundColor: 'red'
    },
    addressText: {
        fontSize: getFontSize(14),
        fontWeight: '500',
        marginLeft: getViewSize(5)
    }
})
export default AddressPosition