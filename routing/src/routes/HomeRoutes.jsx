import { createStackNavigator } from "@react-navigation/stack";
import Home from "../pages/Home";
import TabRoutes from "./TabRoutes";

const HomeRoutes=()=>{
    const Stack = createStackNavigator()

    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen 
                name="Tab"
                component={TabRoutes}
            />
            <Stack.Screen 
                name="Tab2"
                component={Home}
            />
        </Stack.Navigator>
    )
}

export default HomeRoutes;