import React from 'react'
import { styled } from '@theme'
import Link from 'next/link'
import { SiteContainer, PageBlock, PageBlockItem, Heading, Text } from '@components'

const Square = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  width: '50vw',
  height: '50vh',
  background: '#000',
  color: '#000',

  // top: 0,
  // left: 0,
  // right: 0,
  // bottom: 0
  // those attributes will always be used whenyou want to use position:absolute
})


export default function Page() {
  return (

  <SiteContainer align="center" pageBlockSpacing="l3">
    <Square>
      <div style={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        background: '#fff', 
        width: 100, 
        height: 100, 
      }}></div>

      <div style={{ 
        position: 'absolute',
        top: 0,
        right: 0,
        background: '#fff', 
        width: 100, 
        height: 100, 
      }}></div>

      <div style={{ 
        position: 'absolute',
        bottom: 0,
        left: 0,
        background: '#fff', 
        width: 100, 
        height: 100, 
      }}></div>

<div style={{ 
        position: 'absolute',
        bottom: 0,
        right: 0,
        background: '#fff', 
        width: 100, 
        height: 100, 
      }}></div>
    </Square>
  </SiteContainer>

)
}
