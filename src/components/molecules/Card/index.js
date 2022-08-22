import React from 'react'
import { CartContainer, CardImage } from './styles'

export const Card = ({ item }) =>{
  return(
    <CartContainer>
      <CardImage source={{uri: item.image_url}}/>
    </CartContainer>
  )
}
