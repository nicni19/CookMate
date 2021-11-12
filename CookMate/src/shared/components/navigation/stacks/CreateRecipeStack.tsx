import { createStackNavigator } from "@react-navigation/stack";
import { CreateRecipeScreen } from "../../screens/CreateRecipeScreen";
import { CreateRecipeParamList } from "../param-lists/CreateRecipeParamList";

interface CreateRecipeStackProps {}

const Stack = createStackNavigator<CreateRecipeParamList>();

export const CreateRecipeStack: React.FC<CreateRecipeStackProps> = () => {
    return (
        <Stack.Navigator
            initialRouteName="CreateRecipeScreen"
        >
            <Stack.Screen name="CreateRecipeScreen" component={CreateRecipeScreen} />
        </Stack.Navigator>
    );
};