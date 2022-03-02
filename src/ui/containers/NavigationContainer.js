import NavigationView from "../views/NavigationView";
import { NavigationContextProvider } from "../contexts/NavigationContext";

const NavigationContainer = () => { 
    // console.log("<NavigationContainer />");

    return (
        <NavigationContextProvider>
            <NavigationView />
        </NavigationContextProvider>
    );
};

export default NavigationContainer;