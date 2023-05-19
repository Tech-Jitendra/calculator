import React, { useState } from 'react'
import { CustomButton } from '../Components/CustomButton/CustomButton'
import { Box, Flex, ScrollView, Text } from 'native-base'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Dimensions } from "react-native"
import { Result } from './result'

export const Main = () => {
    const windowHeight = Dimensions.get("window").height
    const windowWidth = Dimensions.get("window").width

    return (
        <ScrollView bg={"dark.400s"} scrollEnabled={false}         >
            <SafeAreaView  >
                <Box
                    width={windowWidth}
                    height={windowHeight}
                    justifyContent={"space-between"}
                >
                    <Result />
                </Box>
            </SafeAreaView >
        </ScrollView >
    )
}
