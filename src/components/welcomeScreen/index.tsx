import { StyleSheet, View } from 'react-native';
import { BlurView } from "@react-native-community/blur";
import PageCounter from './components/PageCounter'
import { useCallback, useMemo, useState } from 'react';
import OpacitySwiper from './components/OpacitySwiper';
import SloganTab from './components/SloganTab'
import LoginMethodsTab from './components/LoginMethodsTab';

const imgUrls = [
    'https://tuchuangs.com/imgs/2023/04/23/945f7dee14fb39f4.jpeg',
    'https://tuchuangs.com/imgs/2023/04/23/d12921d23883b1d7.jpeg',
    'https://tuchuangs.com/imgs/2023/04/23/1bc98cb602be8e78.jpeg'
]
function WelcomeScreen(props: any): JSX.Element {
    const { navigation, route } = props
    const [activeIndex, setActiveIndex] = useState(0)
    const [tabFlag, setTabFlag] = useState('sloganTab')
    const start = () => {
        navigation.navigate('MainScreenStack')
    }

    const onIndexChanged = (index: number) => {
        setActiveIndex(index)
    }

    const changeTab = useCallback((tabFlag: string) => {
        setTabFlag(tabFlag)
    }, [])
    return (
        <View style={styles.page}>
            {
                useMemo(() => <OpacitySwiper onIndexChanged={onIndexChanged} imgUrls={imgUrls} />, [])
            }
            <View style={styles.container}>
                <BlurView
                    style={styles.blurView}
                    blurType="xlight"
                    blurAmount={15}
                    reducedTransparencyFallbackColor="white"
                />
                <PageCounter total={imgUrls.length} activeIndex={activeIndex} />
                <SloganTab tabFlag={tabFlag} changeTab={changeTab} />
                <LoginMethodsTab tabFlag={tabFlag} changeTab={changeTab} />
            </View >
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    swiperImg: {
        flex: 1
    },
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        top: '60%',
        overflow: 'hidden'
    },
    blurView: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        top: 0
    }
})
export default WelcomeScreen;