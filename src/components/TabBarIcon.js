import React from "react";
import { Ionicons, FontAwesome, Entypo, SimpleLineIcons, MaterialCommunityIcons} from "@expo/vector-icons";

import Colors from "../constants/Colors";

export default function TabBarIcon(props) {
  const { style, name, size, color, focused, type = "fontAwesomes" } = props;
  const Icon = {
    ionicons: Ionicons,
    fontAwesomes: FontAwesome,
    entypo: Entypo,
    SimpleLineIcons: SimpleLineIcons, 
    MaterialCommunityIcons:MaterialCommunityIcons,
  }[type];
  return (
    <Icon
      name={name}
      size={size}
      style={style}
      color={focused ? Colors.tabIconSelected : Colors.tabIconDefault || color}
    />
  );
}
