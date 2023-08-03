import { View, Text } from "react-native"
import { useEffect, useState } from "react"

import { EthPrice, NFTTitle } from "../../components/SubInfo"
import { COLORS, SIZES, FONTS } from "../../constants"

const DetailsDesc = ({ data }) => {
  const [text, setText] = useState(data.description.slice(0, 100))
  const [readMore, setReadMore] = useState(false)

  useEffect(() => {
    setText(!readMore ? data.description.slice(0, 100) : data.description)
  }, [data.description, readMore])

  return (
    <>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          subTitleSize={SIZES.font}
          titleSize={SIZES.extraLarge}
        />
        <EthPrice price={data.price} />
      </View>
      <View
        style={{
          marginVertical: SIZES.extraLarge * 1.5,
        }}
      >
        <Text
          style={{
            fontSize: SIZES.font,
            fontFamily: FONTS.semiBold,
            color: COLORS.primary,
          }}
        >
          Description
        </Text>
        <View style={{ marginTop: SIZES.base }}>
          <Text
            style={{
              fontSize: SIZES.small,
              fontFamily: FONTS.regular,
              color: COLORS.secondary,
              lineHeight: SIZES.large,
              textAlign: "justify",
            }}
          >
            {text}
            {!readMore && "... "}
            {
              <Text
                onPress={() => {
                  setReadMore(!readMore)
                }}
                style={{
                  fontSize: SIZES.small,
                  fontFamily: FONTS.semiBold,
                  color: COLORS.primary,
                  lineHeight: SIZES.large,
                  textAlign: "justify",
                }}
              >
                {readMore ? " Show less" : "Read more"}
              </Text>
            }
          </Text>
        </View>
      </View>
    </>
  )
}

export default DetailsDesc
