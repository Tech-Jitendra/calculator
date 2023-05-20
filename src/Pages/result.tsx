import React, { useState } from 'react'
import { CustomButton } from '../Components/CustomButton/CustomButton'
import { Box, Flex, ScrollView, Text, theme } from 'native-base'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Dimensions } from "react-native"
import { StyleSheet } from "react-native"

export const Result = () => {
    // let result1 = ""
    let operations = { "+": "+", "/": "/", "-": "-", "*": "*" }
    const handleClick = (item) => {
        setEnteredDigit(item)
        let list = digitWithOperations
        // console.log("list.length > 1 && !(list[list.length - 1] in operations)", list.length > 1 && list[list.length - 1] in operations)
        // if (list.length > 1 && list[list.length - 1] in operations)
        //     list.slice(list.length - 1, 0)
        // else
        list += item
        setDigitWithOperations(list)
        if (list.length > 1 && !(list[list.length - 1] in operations))
            setResult(eval(list))
    }

    const removeAll = () => {
        setDigitWithOperations("")
        setEnteredDigit(0)
    }

    const removeOneDigit = () => {
        // let list = digitWithOperations
        // if (list.length > 0) {
        //     list.pop()
        //     setDigitWithOperations([...list])
        // }
    }

    // const handleOperation = (item) => {
    //     let list = digitWithOperations
    //     list.push(item)
    //     setDigitWithOperations([...list])
    //     switch (item) {
    //         case item == "+":
    //             return true
    //     }
    // }

    const itemList = [
        {
            label: 1, width: "25%", handler: handleClick, style: styles.digitButtonStyle
        },
        {
            label: 2, width: "25%", handler: handleClick, style: styles.digitButtonStyle
        },
        {
            label: 3, width: "25%", handler: handleClick, style: styles.digitButtonStyle
        },
        {
            label: "C", width: "25%", handler: removeAll, style: styles.cancleButtonStyle
        },
        {
            label: 4, width: "25%", handler: handleClick, style: styles.digitButtonStyle
        },
        {
            label: 5, width: "25%", handler: handleClick, style: styles.digitButtonStyle
        },
        {
            label: 6, width: "25%", handler: handleClick, style: styles.digitButtonStyle
        },
        {
            label: "+", width: "25%", handler: handleClick, style: styles.cancleButtonStyle
        },
        {
            label: 7, width: "25%", handler: handleClick, style: styles.digitButtonStyle
        },
        {
            label: 8, width: "25%", handler: handleClick, style: styles.digitButtonStyle
        },
        {
            label: 9, width: "25%", handler: handleClick, style: styles.digitButtonStyle
        },
        {
            label: "-", width: "25%", handler: handleClick, style: styles.cancleButtonStyle
        },
        {
            label: 0, width: "25%", handler: handleClick, style: styles.digitButtonStyle
        },
        {
            label: "00", width: "25%", handler: handleClick, style: styles.digitButtonStyle
        },
        {
            label: "/", width: "25%", handler: handleClick, style: styles.cancleButtonStyle
        },
        {
            label: "*", width: "25%", handler: handleClick, style: styles.cancleButtonStyle
        },
        {
            label: "X", width: "48%", handler: removeOneDigit, style: {
                ...styles.longButtonStyle, backgroundColor: theme.colors.red[500],
            }
        },
        {
            label: "=", width: "48%", handler: () => {
                setResult(eval(digitWithOperations))
            }, style: {
                ...styles.longButtonStyle, backgroundColor: theme.colors.green[400],
            }
        },

    ]

    const [operationData, setSperationData] = useState(0)
    const [enteredDigit, setEnteredDigit] = useState(0)
    const [digitWithOperations, setDigitWithOperations] = useState<string>('')
    const [result, setResult] = useState(null)
    const [twoWayList, setTwoWayList] = useState([])
    const [numOne, setNumberOne] = useState("0")
    const [numTwo, setNumberTwo] = useState("0")



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
                    {digitWithOperations.length == 0
                        ?
                        0 :
                        digitWithOperations}
                </Text>
                <Text
                    color={"white"}
                    fontSize={"8xl"}
                >
                    {enteredDigit}
                </Text>
            </Box>
            <Flex
                height={"60%"}
                width={"100%"}
                direction={"row"}
                flexWrap={"wrap"}
                mx={2}
            >
                {
                    itemList.map((item, index) => {
                        return (
                            <Box
                                width={item.width}
                                px={item.width == "48%" ? "1" : "0"}
                            >
                                <CustomButton
                                    key={index}
                                    heading={item.label}
                                    handler={item.handler}
                                    style={item.style}
                                />
                            </Box>
                        )
                    })
                }
            </Flex>
        </ >
    )
}


const styles = StyleSheet.create({
    digitButtonStyle: {
        color: theme.colors.success[400],
        height: 65,
        width: 65,
        backgroundColor: theme.colors.success[400],
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: theme.sizes[2],
        marginVertical: theme.sizes[2],
    },
    cancleButtonStyle: {
        height: 65,
        width: 65,
        backgroundColor: theme.colors.red[400],
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: theme.sizes[2],
        marginVertical: theme.sizes[2],
    },
    longButtonStyle: {
        height: 65,
        backgroundColor: theme.colors.gray[400],
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: theme.sizes[2],
        marginVertical: theme.sizes[2],
    },
});