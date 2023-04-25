import { StyleSheet, View, TouchableOpacity, TouchableWithoutFeedback, ImageBackground } from 'react-native';
import React, { useEffect } from 'react';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing } from 'react-native-reanimated';
import { getViewSize } from '@/utils/sizeTool';

type LoginMethodsTabProps = {
    tabFlag: string,
    changeTab: (tabName: string) => void
}

function LoginMethodsTab({ tabFlag, changeTab }: LoginMethodsTabProps) {
    const loginOpacity = useSharedValue(0);
    const loginScale = useSharedValue(0.2);
    const animatedLoginStyles = useAnimatedStyle(() => {
        return {
            opacity: withTiming(loginOpacity.value, {
                duration: 300,
                easing: Easing.linear
            }),
            transform: [
                {
                    scale: withTiming(loginScale.value, {
                        duration: 300,
                        easing: Easing.linear
                    })
                }
            ]
        }
    });
    const backSloganHandler = () => {
        changeTab('sloganTab')
    }
    useEffect(() => {
        if (tabFlag === 'loginMethodsTab') {
            loginOpacity.value = 1
            loginScale.value = 1
        } else {
            loginOpacity.value = 0
            loginScale.value = 0.2
        }
    }, [tabFlag])
    const alipayHandler = () => {
        console.log('我是支付宝')
    }
    const mobilePhoneHandler = () => {
        console.log('我是手机号')
    }
    const wechatHandler = () => {
        console.log('我是微信')
    }
    return (
        <Animated.View style={[styles.container, animatedLoginStyles]}>
            <TouchableWithoutFeedback onPress={backSloganHandler}>
                <View style={styles.loginMethods}>
                    <TouchableOpacity onPress={alipayHandler}>
                        <ImageBackground style={styles.loginMethod} source={require('@/static/alipay.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={mobilePhoneHandler}>
                        <ImageBackground style={styles.loginMethod} source={require('@/static/mobilePhone.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={wechatHandler}>
                        <ImageBackground style={styles.loginMethod} source={require('@/static/wechat.png')} />
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        top: '13%'
    },
    loginMethods: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginMethod: {
        width: getViewSize(50),
        height: getViewSize(50),
        marginHorizontal: getViewSize(20),
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 10
    }
})

//true不更新，false更新
const equalProps = (prevProps: LoginMethodsTabProps, nextProps: LoginMethodsTabProps) => {
    return prevProps.tabFlag === nextProps.tabFlag
}
export default React.memo(LoginMethodsTab, equalProps)