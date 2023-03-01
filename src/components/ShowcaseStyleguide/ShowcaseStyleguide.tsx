import React from 'react'
import { styled } from '@theme'

const ShowcaseWrap = styled('div', {
  width: '100%',
  overflow: 'scroll',
  background: '#fff',
  padding: '100px 0',
})

const ShowcaseImage = styled('img', {
  width: 6000,
  height: 'auto',
  margin: '0 100px'
})

interface ShowcaseProps {
  image: string
  imageAlt: string
}

export const ShowcaseStyleguide =({ image, imageAlt }: ShowcaseProps) => {
  return (
    <ShowcaseWrap>
      <ShowcaseImage src={ image } alt={ imageAlt } />
    </ShowcaseWrap>
  )
}