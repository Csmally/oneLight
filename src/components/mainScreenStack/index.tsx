import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@/pages/homeScreen'
import OrdersScreen from '@/pages/ordersScreen'
import CommunityScreen from '@/pages/communityScreen'
import MineScreen from '@/pages/mineScreen'
import CustomTabBar from '@/components/customTabBar'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { commonEnum } from '@/interfaces';

const Tab = createBottomTabNavigator();

function MainScreenStack(): JSX.Element {
    return (
        <Tab.Navigator tabBar={(props: BottomTabBarProps) => <CustomTabBar {...props} />}>
            <Tab.Screen
                name={commonEnum.PATH_NAME.HOME}
                component={HomeScreen}
                options={{ title: commonEnum.PATH_NAME_ZH.HOME, headerShown: false, }}
            />
            <Tab.Screen
                name={commonEnum.PATH_NAME.ORDERS}
                component={OrdersScreen}
                options={{ title: commonEnum.PATH_NAME_ZH.ORDERS }}
            />
            <Tab.Screen
                name={commonEnum.PATH_NAME.COMMUNITY}
                component={CommunityScreen}
                options={{ title: commonEnum.PATH_NAME_ZH.COMMUNITY }}
            />
            <Tab.Screen
                name={commonEnum.PATH_NAME.MINE}
                component={MineScreen}
                options={{ title: commonEnum.PATH_NAME_ZH.MINE, headerShown: false }}
            />
        </Tab.Navigator>
    )
}

export default MainScreenStack