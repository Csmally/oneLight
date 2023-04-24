import React, { useEffect, useState } from "react"
import { StyleSheet, View } from "react-native"
import AnimatedImage from "./AnimatedImage"

const imgUrls = [
    'https://tuchuangs.com/imgs/2023/04/23/945f7dee14fb39f4.jpeg',
    'https://tuchuangs.com/imgs/2023/04/23/d12921d23883b1d7.jpeg',
    'https://tuchuangs.com/imgs/2023/04/23/1bc98cb602be8e78.jpeg'
]
type OpacitySwiperProps = {
    onIndexChanged: (index: number) => void
}
function OpacitySwiper({ onIndexChanged }: OpacitySwiperProps) {
    const [activeIndex, setActiveIndex] = useState(0)
    useEffect(() => {
        let timer = setInterval(() => {
            if (activeIndex === imgUrls.length - 1) {
                setActiveIndex(0)
                onIndexChanged(0)
            } else {
                setActiveIndex(activeIndex + 1)
                onIndexChanged(activeIndex + 1)
            }
        }, 6000)
        return () => {
            clearInterval(timer)
        }
    }, [activeIndex])
    return (
        <View style={styles.container}>
            {
                imgUrls.map((uri, index) => <AnimatedImage uri={uri} selfIndex={index} activeIndex={activeIndex} key={index} />)
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default OpacitySwiper