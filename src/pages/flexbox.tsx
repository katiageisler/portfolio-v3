import React from 'react'
import { styled } from '@theme'
import Link from 'next/link'
import { SiteContainer, PageBlock, PageBlockItem, Heading, Text } from '@components'

const Square = styled('div', {
  display: 'flex', // Initializes the box to take in Flex box properties
  alignItems: 'center', // This is to center the item vertically
  // alignItems: 'flex-end', - aligns to the top, vertically
  // alignItems: 'flex-start', - aligns to the bottom, vertically
  justifyContent: 'center', // this is to center the item horizontally
  // justifyContent: 'space-between', - evenly devides any amount of children to the space available
  // justifyContent: 'flex-start', - aligns to the left , horizontal
  // justifyContent: 'flex-end', - aligns to the right - horizontal

  flexDirection: 'row', // default
  // flexDirection: 'column', - orients the content to be vertical (stacked, not side-by-side)
  position: 'absolute',
  width: '50vw',
  height: '50vh',
  background: '#000',
  color: '#000'
})


export default function Page() {
  return (

  <SiteContainer align="center" pageBlockSpacing="l3">
    <Square>
      <div style={{ 
        position: 'relative',
        background: '#fff', 
        width: 100, 
        height: 100, 
      }}></div>

      <div style={{ 
        position: 'relative',
        background: '#fff', 
        width: 100, 
        height: 100, 
      }}></div>
    </Square>
  </SiteContainer>    
  )
}
