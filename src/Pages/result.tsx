import React, { useState } from 'react'
import { CustomButton } from '../Components/CustomButton/CustomButton'
import { Box, Flex, ScrollView, Text } from 'native-base'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Dimensions } from "react-native"
export const Result = () => {

    const itemList = [1, 2, 3, 4, 5, 6, 7, 8, 9, "*", "0", "x"]
    const [operationData, setSperationData] = useState(null)
    const [enteredDigit, setEnteredDigit] = useState(0)
    const [result, setResult] = useState(null)

    const handleClick = (item) => {
        setEnteredDigit(item)
    }

    const windowHeight = Dimensions.get("window").height
    const windowWidth = Dimensions.get("window").width

    return (
        <>
            <Box
                height={"40%"}
                bg={"black"}
                width={windowWidth}
                alignItems={"flex-end"}
                justifyContent={"flex-end"}
            >
                <Text
                    color={"white"}
                    fontSize={"xl"}
                >
                    {result}
                </Text>
                <Text
                    color={"white"}
                    fontSize={"xl"}
                >
                    {enteredDigit}
                </Text>
            </Box>
            <Flex
                height={"60%"}
                // bg={"blue.800"}
                width={"100%"}
                padding={"20px"}
                direction={"row"}
                flexWrap={"wrap"}
            >
                {
                    itemList.map((item, index) => {
                        return (
                            <CustomButton
                                key={index}
                                heading={item?.toString()}
                                handler={setEnteredDigit}
                            />
                        )
                    })
                }
            </Flex>
        </ >
    )
}
