import { FlatList, SafeAreaView, View } from "react-native"
import React, { useState } from "react"

import FocusedStatusBar from "../../components/FocusedStatusBar"
// eslint-disable-next-line import/no-named-as-default
import HomeHeader from "../../components/HomeHeader"
import NFTCard from "../../components/NFTCard"

import { COLORS, NFTData } from "../../constants"

const Home = () => {
  const [nftData, setNftData] = useState(NFTData)

  const handleSearch = (value) => {
    if (!value.length) return setNftData(NFTData)

    const filteredData = NFTData.filter((item) => {
      return item.name.toLowerCase().includes(value.toLowerCase())
    })

    if (filteredData.length) {
      setNftData(filteredData)
    } else {
      setNftData(NFTData)
    }
  }

  return (
    // Adding a custom padding on top to have SafeAreaView work on Android
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: 36,
      }}
    >
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={nftData}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
          <View
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              zIndex: -1,
            }}
          >
            <View
              style={{
                height: 300,
                backgroundColor: COLORS.primary,
              }}
            />
            <View
              style={{
                flex: 1,
                backgroundColor: COLORS.white,
              }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home
