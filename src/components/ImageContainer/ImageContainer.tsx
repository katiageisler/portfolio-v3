import React from 'react'
import Image from 'next/image'
import { styled } from '@theme'

const ImageWrap = styled('div', {
  position: 'relative',
  width: '100%'
})

interface ImageProps {
  image: string
  imageAlt: string
}

export const ImageContainer = ({ image, imageAlt }:ImageProps) => {
  return(

    <ImageWrap>
      <img src={ image } alt={ imageAlt } />
    </ImageWrap>

  )
}