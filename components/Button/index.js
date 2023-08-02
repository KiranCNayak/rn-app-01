import { TouchableOpacity, Image, View, Text } from "react-native"
import React from "react"
import { COLORS, FONTS, SHADOWS, SIZES } from "../../constants"

export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={handlePress}
      style={{
        alignItems: "center",
        backgroundColor: COLORS.white,
        borderRadius: SIZES.extraLarge,
        flex: 1,
        height: 40,
        justifyContent: "center",
        padding: 8,
        position: "absolute",
        width: 40,
        ...props,
        ...SHADOWS.light,
      }}>
      <Image source={imgUrl} resizeMode='contain' style={{ width: 28, height: 28 }} />
    </TouchableOpacity>
  )
}

export const RectButton = ({ minWidth, fontSize, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={handlePress}
      style={{
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        minWidth,
        padding: SIZES.small,
        ...props,
        ...SHADOWS.light,
      }}>
      <Text
        style={{
          fontFamily: FONTS.bold,
          fontSize,
          color: COLORS.white,
          textAlign: "center",
        }}>
        Place Bid
      </Text>
    </TouchableOpacity>
  )
}
