import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TopRoutes from "./TopRoutes";
import Notification from "../pages/Notification";
import Settings from "../pages/Settings";

const TabRoutes=()=>{
    const Stack = createBottomTabNavigator()

    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Tab1"
                component={TopRoutes}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name="Notification"
                component={Notification}
            />
            <Stack.Screen 
                name="Settings"
                component={Settings}
            />
        </Stack.Navigator>
    )
}

export default TabRoutes;