import { createAppContainer } from "react-navigation";
import { createSharedElementStackNavigator } from "react-navigation-shared-element/build/v4";
import { TransitionPresets } from "react-navigation-stack";

import { createScreen, MasterScreen, DetailScreen } from "../screens";

const SimpleStackNavigator = createSharedElementStackNavigator(
  {
    Master: createScreen(MasterScreen, "FadeFromBottomAndroid"),
    Detail: DetailScreen,
  },
  {
    defaultNavigationOptions: {
      ...TransitionPresets.FadeFromBottomAndroid,
    },
  },
  {
    name: "FadeFromBottomAndroid",
    debug: true,
  }
);

export default createAppContainer(SimpleStackNavigator);