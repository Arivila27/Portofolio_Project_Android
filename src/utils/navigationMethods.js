import { StackActions } from "@react-navigation/native";
import { navigateRef } from "../router/router";

export const navigationPush = (screenName) => {
    if(navigateRef.isReady()){
        navigateRef.navigate(screenName)
    }
}

export const navigationPop = () => {
    if(navigateRef.isReady()){
        const pop = StackActions.pop();
        navigateRef.navigate(pop)
    }
}