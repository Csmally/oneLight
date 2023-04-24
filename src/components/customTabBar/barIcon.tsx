import { Image, StyleSheet } from "react-native"
import { commonEnum } from "@/interfaces"
import { getViewSize } from "@/utils/sizeTool"

interface BarIconProps {
    isFocused: boolean,
    pathName: string
}

function BarIcon(props: BarIconProps): JSX.Element {
    const { isFocused, pathName } = props
    let component
    switch (pathName) {
        case commonEnum.PATH_NAME.HOME:
            component = <Image style={styles.barIcon} source={isFocused ? require('@/static/homeSelect.png') : require('@/static/homeUnSelect.png')} />
            break;
        case commonEnum.PATH_NAME.ORDERS:
            component = <Image style={styles.barIcon} source={isFocused ? require('@/static/ordersSelect.png') : require('@/static/ordersUnSelect.png')} />
            break;
        case commonEnum.PATH_NAME.COMMUNITY:
            component = <Image style={styles.barIcon} source={isFocused ? require('@/static/communitySelect.png') : require('@/static/communityUnSelect.png')} />
            break;
        case commonEnum.PATH_NAME.MINE:
            component = <Image style={styles.barIcon} source={isFocused ? require('@/static/mineSelect.png') : require('@/static/mineUnSelect.png')} />
            break;
        default:
            component = <Image style={styles.barIcon} source={isFocused ? require('@/static/notFoundSelect.png') : require('@/static/notFoundUnSelect.png')} />
            break;
    }
    return (
        component
    )
}

const styles = StyleSheet.create({
    barIcon: {
        width: getViewSize(27),
        height: getViewSize(27),
        marginBottom: getViewSize(10)
    }
})

export default BarIcon