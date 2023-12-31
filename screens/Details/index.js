import {
  View,
  Text,
  Image,
  SafeAreaView,
  StatusBar,
  FlatList,
} from "react-native"
import React from "react"

import DetailsBid from "../../components/DetailsBid"
import DetailsDesc from "../../components/DetailsDesc"
import FocusedStatusBar from "../../components/FocusedStatusBar"
import { CircleButton, RectButton } from "../../components/Button"
import { SubInfo } from "../../components/SubInfo"
import { FONTS, COLORS, SHADOWS, SIZES, assets } from "../../constants"

const DetailsHeader = ({ data, navigation }) => {
  return (
    <View
      style={{
        width: "100%",
        height: 373,
      }}
    >
      <Image
        source={data.image}
        resizeMode="cover"
        style={{
          width: "100%",
          height: "100%",
        }}
      />

      <CircleButton
        imgUrl={assets.left}
        handlePress={() => navigation.goBack()}
        left={15}
        top={StatusBar.currentHeight + 10}
      />

      <CircleButton
        imgUrl={assets.heart}
        right={15}
        top={StatusBar.currentHeight + 10}
      />
    </View>
  )
}

const Details = ({ route, navigation }) => {
  const { data } = route.params
  return (
    // Adding a custom padding on top to have SafeAreaView work on Android
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: 36,
      }}
    >
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255,255,255,0.5)",
          zIndex: 1,
        }}
      >
        <RectButton
          minWidth={170}
          fontSize={SIZES.large}
          {...SHADOWS.dark}
          style={{ color: COLORS.gray }}
        />
      </View>
      <FlatList
        data={data.bids}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        ListHeaderComponent={() => (
          <>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo />
            <View style={{ padding: SIZES.font }}>
              <DetailsDesc data={data} />

              {data.bids.length > 0 && (
                <Text
                  style={{
                    fontSize: SIZES.font,
                    fontFamily: FONTS.semiBold,
                    color: COLORS.primary,
                  }}
                >
                  Current bids
                </Text>
              )}
            </View>
          </>
        )}
      />
    </SafeAreaView>
  )
}

export default Details
