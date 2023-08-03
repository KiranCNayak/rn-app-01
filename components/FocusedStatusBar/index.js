import { StatusBar } from "react-native"
import React from "react"

import { useIsFocused } from "@react-navigation/core"

const FocusedStatusBar = props => {
  const isFocused = useIsFocused()

  return !isFocused ? null : (
    <StatusBar
      animated={true}
      {...props}
    />
  )
}

export default FocusedStatusBar
