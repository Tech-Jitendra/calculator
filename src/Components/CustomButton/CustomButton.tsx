import { Text, theme } from 'native-base'
import { Button } from "react-native"
import { ColorType } from 'native-base/lib/typescript/components/types'
import React, { SetStateAction } from 'react'
import { StyleSheet, Pressable, View } from "react-native"

export const CustomButton = (
    props: {
        heading: string,
        handler: Function
    }
) => {
    return (
        <Pressable
            style={styles.buttonStyle}
            onPress={() => props.handler(props.heading)}
        >
            <Text >{props.heading}</Text>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    buttonStyle: {
        color: theme.colors.success[400],
        height: 65,
        width: 65,
        backgroundColor: theme.colors.success[400],
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        margin: theme.sizes[5],
        shadowOffset: { width: -2, height: 4 },
        shadowColor: '#171717',
        shadowOpacity: 0.2,
        shadowRadius: 3,
    }
});
