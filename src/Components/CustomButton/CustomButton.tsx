import { Box, Text, theme } from 'native-base'
import { Button, StyleProp, ViewStyle } from "react-native"
import { ColorType } from 'native-base/lib/typescript/components/types'
import React, { SetStateAction } from 'react'
import { StyleSheet, Pressable, View } from "react-native"

export const CustomButton = (
    props: {
        heading: string | number,
        handler: Function
        style: StyleProp<ViewStyle>
    }
) => {
    return (
        <Pressable
            style={props.style}
            onPress={() => props.handler(props.heading)}
        >
            <Text
                fontSize={"lg"}
            >{props.heading}</Text>
        </Pressable>
    )
}
