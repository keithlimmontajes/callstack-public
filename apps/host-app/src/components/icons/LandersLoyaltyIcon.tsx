import React from "react";
import Svg, {
  SvgProps,
  Rect,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";

const LandersLoyaltyIcon = (props: SvgProps) => (
  <Svg
    {...props}
    width={33}
    height={33}
    fill="none"
  >
    <Rect
      width={31.874}
      height={31.874}
      y={31.874}
      fill="url(#a)"
      rx={15.937}
      transform="rotate(-90 0 31.874)"
    />
    <Rect
      width={26.128}
      height={26.128}
      y={6.763}
      fill="url(#b)"
      rx={13.064}
      transform="rotate(-15 0 6.763)"
    />
    <Rect
      width={23.124}
      height={23.124}
      x={4.375}
      y={4.375}
      fill="#fff"
      rx={11.562}
    />
    <Path
      fill="#7D9956"
      d="M15.95 15.965a4.249 4.249 0 1 0 3.005 5.203 4.249 4.249 0 0 1-3.005-5.203Z"
    />
    <Path
      fill="#B2D465"
      d="M12.946 10.761a4.248 4.248 0 0 0-2.2 8.208 4.248 4.248 0 0 1 5.204-3.004 4.249 4.249 0 0 0-3.004-5.204Z"
    />
    <Path
      fill="#fff"
      d="M19.553 21.22a3.858 3.858 0 1 0 0-7.717 3.858 3.858 0 0 0 0 7.717Z"
    />
    <Path
      fill="#67883B"
      d="M21.154 12.96a4.248 4.248 0 0 1-5.204 3.005 4.248 4.248 0 1 0 5.204-3.004Z"
    />
    <Path
      fill="#80AF45"
      d="M18.15 7.757a4.249 4.249 0 0 0-5.204 3.004 4.249 4.249 0 0 1 3.005 5.204 4.249 4.249 0 0 0 2.199-8.208Z"
    />
    <Rect
      width={23.124}
      height={23.124}
      x={4.375}
      y={4.375}
      fill="url(#c)"
      rx={11.562}
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={30.063}
        x2={-3.325}
        y1={60.063}
        y2={52.761}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#C9C9C9" />
        <Stop offset={0.798} stopColor="#F2F2F2" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={24.643}
        x2={-2.725}
        y1={29.87}
        y2={23.885}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#C4C4C4" />
        <Stop offset={0.798} stopColor="#EFEFEF" />
        <Stop offset={0.901} stopColor="#EFEFEF" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={-0.058}
        x2={29.811}
        y1={34.822}
        y2={-1.406}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={0.735} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
)
export default LandersLoyaltyIcon
