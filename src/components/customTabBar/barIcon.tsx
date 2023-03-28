import { Image, StyleSheet } from "react-native"
import { PATH_NAME } from "@/interfaces/commonEnum"

interface BarIconProps {
    isFocused: boolean,
    pathName: string
}

function BarIcon(props: BarIconProps): JSX.Element {
    const { isFocused, pathName } = props
    let component
    switch (pathName) {
        case PATH_NAME.HOME:
            component = isFocused ? <Image style={styles.barIcon} source={require('@/static/homeSelect.png')}/> : <Image style={styles.barIcon} source={require('@/static/homeUnSelect.png')}/>
            break;
        case PATH_NAME.ORDERS:
            component = isFocused ? <Image style={styles.barIcon} source={require('@/static/ordersSelect.png')}/> : <Image style={styles.barIcon} source={require('@/static/ordersUnSelect.png')}/>
            break;
        case PATH_NAME.COMMUNITY:
            component = isFocused ? <Image style={styles.barIcon} source={require('@/static/communitySelect.png')}/> : <Image style={styles.barIcon} source={require('@/static/communityUnSelect.png')}/>
            break;
        case PATH_NAME.MINE:
            component = isFocused ? <Image style={styles.barIcon} source={require('@/static/mineSelect.png')}/> : <Image style={styles.barIcon} source={require('@/static/mineUnSelect.png')}/>
            break;
        default:
            component = isFocused ? <Image style={styles.barIcon} source={require('@/static/notFoundSelect.png')}/> : <Image style={styles.barIcon} source={require('@/static/notFoundUnSelect.png')}/>
            break;
    }
    return (
        component
    )
}

const styles = StyleSheet.create({
    barIcon: {
        width: 27,
        height: 27,
        marginBottom: 10
    }
})

export default BarIcon