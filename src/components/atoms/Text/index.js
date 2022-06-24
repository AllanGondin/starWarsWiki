import React from "react";
import { CustomText } from './style'

export const Text = ({ children, color }) => {
  return (
    <CustomText color={color}>
        {children}
    </CustomText>
  )
}