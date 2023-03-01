import React from 'react'
import { styled } from '@theme'

const BlockWrap = styled('div', {
  position: 'relative',
  width: '100%'
})

interface BlockProps {
  children: React.ReactNode
}

export const PageBlockItem = ({ children }:BlockProps) => {
  return(

    <BlockWrap>{ children }</BlockWrap>

  )
}