/**
 *
 * @format
 */

// React modules
import React from "react";
import { Image as RNImage } from "react-native";

// Types
import { PropsType } from "./types";

// Styles
import { scale, verticalScale } from "react-native-size-matters";

const Image = (props: PropsType) => {
  const { height, width, source, customStyle } = props;
  return (
    <RNImage
      resizeMode="contain"
      source={source}
      style={[
        {
          height: height ? verticalScale(height) : "100%",
          width: width ? scale(width) : "100%",
          ...customStyle,
        },
      ]}
    />
  );
};

export default Image;
