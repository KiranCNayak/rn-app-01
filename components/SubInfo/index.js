import { View, Text, Image } from "react-native"
import React from "react"

import { SIZES, FONTS, COLORS, SHADOWS, assets } from "../../constants"

export const NFTTitle = ({ title, subTitle, titleSize, subTitleSize }) => {
  return (
    <View>
      <Text
        style={{
          fontFamily: FONTS.bold,
          fontSize: titleSize,
          color: COLORS.primary,
        }}>
        {title}
      </Text>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: subTitleSize,
          color: COLORS.gray,
        }}>
        {subTitle}
      </Text>
    </View>
  )
}

export const EthPrice = ({ price }) => {
  return (
    <View style={{ flexDirection: "row",
      alignItems: "center" }}>
      <Image
        source={assets.eth}
        resizeMode="contain"
        style={{ width: 18,
          height: 18 }}
      />
      <Text style={{ fontFamily: FONTS.bold,
        fontSize: SIZES.medium }}>
        {price}
      </Text>
    </View>
  )
}

export const ImageCmp = ({ imgUrl, index }) => {
  return (
    <Image
      source={imgUrl}
      resizeMode="contain"
      style={{
        width: 48,
        height: 48,
        marginLeft: index === 0 ? 0 : -SIZES.font,
      }}
    />
  )
}

export const People = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      {[ assets.person02, assets.person03, assets.person04 ].map(
        (imgUrl, index) => (
          <ImageCmp
            key={`People-${index}`}
            imgUrl={imgUrl}
            index={index}
          />
        )
      )}
    </View>
  )
}

export const EndDate = () => {
  return (
    <View
      style={{
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.base,
        backgroundColor: COLORS.white,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: SIZES.base,
        maxWidth: "50%",
        elevation: 1,
        ...SHADOWS.light,
      }}>
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: SIZES.small,
          color: COLORS.primary,
        }}>
        Ending in
      </Text>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.medium,
          color: COLORS.primary,
        }}>
        12h 30m
      </Text>
    </View>
  )
}

export const SubInfo = () => {
  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: "row",
        justifyContent: "space-between",
      }}>
      <People />
      <EndDate />
    </View>
  )
}
