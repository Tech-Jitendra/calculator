import { Button, Text } from 'native-base'
import React from 'react'

export const CustomButton = (
    props: {
        heading: number | string,
        bgColor: string,
        borderRadius: string
        height: string,
        width: string,
    }
) => {
    return (
        <>
            <Button
                height={props.height}
                width={props.width}
                colorScheme={props.bgColor}
                borderRadius={props.borderRadius}
            >
                {props.heading}
            </Button >
        </>
    )
}
