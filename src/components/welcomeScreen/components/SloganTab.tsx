import { getViewSize, getFontSize } from '@/utils/sizeTool';
import React, { useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing } from 'react-native-reanimated';

type SloganTabProps = {
    tabFlag: string,
    changeTab: (tabName: string) => void
}

function SloganTab({ tabFlag, changeTab }: SloganTabProps) {
    const sloganOpacity = useSharedValue(1);
    const sloganScale = useSharedValue(1);
    const animatedSloganStyles = useAnimatedStyle(() => {
        return {
            opacity: withTiming(sloganOpacity.value, {
                duration: 300,
                easing: Easing.linear,
            }),
            transform: [
                {
                    scale: withTiming(sloganScale.value, {
                        duration: 300,
                        easing: Easing.linear
                    })
                }
            ]
        }
    });
    const joinUs = () => {
        console.log('加入我们！！！')
    }
    const loginHandler = () => {
        changeTab('loginMethodsTab')
    }
    useEffect(() => {
        if (tabFlag === 'sloganTab') {
            sloganOpacity.value = 1
            sloganScale.value = 1
        } else {
            sloganOpacity.value = 0
            sloganScale.value = 0.2
        }
    }, [tabFlag])
    return (
        <Animated.View style={[styles.container, animatedSloganStyles]}>
            <View style={styles.sloganContainer}>
                <View>
                    <Text style={[styles.fontStyle, styles.title]}>Welcome Use OneLight</Text>
                    <Text style={[styles.fontStyle, styles.title]}>这是一个专属年轻人的App</Text>
                    <Text style={[styles.fontStyle, styles.content]}>在这里，你可以</Text>
                    <Text style={[styles.fontStyle, styles.content]}>分享美食，社交，数码，时尚</Text>
                    <Text style={[styles.fontStyle, styles.content]}>
                        或者
                        <Text style={[styles.fontStyle, styles.content, styles.joinUs]} onPress={joinUs}>加入我们</Text>
                        的团队
                    </Text>
                </View>
                <TouchableOpacity style={styles.loginBtn} onPress={loginHandler}>
                    <Text style={styles.loginText}>注册</Text>
                </TouchableOpacity>
            </View>
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
    sloganContainer: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: getViewSize(25)
    },
    fontStyle: {
        textAlign: 'center',
        marginVertical: getViewSize(4)
    },
    title: {
        fontSize: getFontSize(18),
        fontWeight: '600'
    },
    content: {
        fontSize: getFontSize(15),
        color: '#999999'
    },
    joinUs: {
        color: '#4597f7'
    },
    loginBtn: {
        width: getViewSize(150),
        height: getViewSize(46),
        borderRadius: getViewSize(23),
        backgroundColor: '#000000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 10
    },
    loginText: {
        color: '#ffffff',
        fontSize: getFontSize(16),
        fontWeight: 'bold'
    },
})

//true不更新，false更新
const equalProps = (prevProps: SloganTabProps, nextProps: SloganTabProps) => {
    return prevProps.tabFlag === nextProps.tabFlag
}
// export default SloganTab
export default React.memo(SloganTab, equalProps)