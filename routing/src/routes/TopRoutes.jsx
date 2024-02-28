import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Home from "../pages/Home";
import About from "../pages/About";

const TopRoutes=()=>{
    const Stack=createMaterialTopTabNavigator()

    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Main"
                component={Home}
            />
            <Stack.Screen 
                name="About"
                component={About}
            />
            <Stack.Screen 
                name="Main2"
                component={Home}
            />
        </Stack.Navigator>
    )
}

export default TopRoutes;