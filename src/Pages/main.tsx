import React from 'react'
import { CustomButton } from '../Components/CustomButton/CustomButton'
import { Box, Flex } from 'native-base'

export const Main = () => {

    const itemList = [1, 2, 3, 4, 5, 6, 7, 8, 9, "*", 0, "x"]

    return (
        <>
            {/* <Flex
                flex={1}
            // flexBasis={"30%"}
            > */}
            {
                itemList.map((item, index) => {
                    return (
                        <Flex
                            width={"100%"}
                            bg={'amber.200'}
                            key={index}
                            padding={"20px"}
                            direction={"row"}
                        >
                            <CustomButton
                                bgColor={"secondary"}
                                heading={item}
                                borderRadius='full'
                                height={"45px"}
                                width={"45px"}
                            />
                        </Flex>
                    )
                })
            }
            {/* </Flex> */}
        </>
    )
}
