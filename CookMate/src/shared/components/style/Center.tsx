import React from "react";
import { View } from "react-native";

interface IProps {}

export const Center: React.FC<IProps> = ({ children }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      {children}
    </View>
  );
};