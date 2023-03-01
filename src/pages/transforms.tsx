import React from 'react'
import { styled } from '@theme'
import Link from 'next/link'
import { SiteContainer, PageBlock, PageBlockItem, Heading, Text } from '@components'

const Square = styled('div', {
  display: 'flex', // Initializes the box to take in Flex box properties
  flexDirection: 'row', // default, horizontal
  // flexDirection: 'column', - orients the content to be vertical (stacked, not side-by-side)
  alignItems: 'center', // This is to center the item vertically
  // alignItems: 'flex-end', - aligns to the top, vertically
  // alignItems: 'flex-start', - aligns to the bottom, vertically
  justifyContent: 'center', // this is to center the item horizontally
  // justifyContent: 'space-between', - evenly devides any amount of children to the space available
  // justifyContent: 'flex-start', - aligns to the left , horizontal
  // justifyContent: 'flex-end', - aligns to the right - horizontal
  position: 'absolute',
  width: '50vw',
  height: '50vh',
  background: '#000',
  color: '#fff'
})

const LinkAnimation = styled('div', {
  position: 'relative',

  a: {
    display: 'block',
    position: 'relative',
    paddingBottom: 10,
    
    '&:after':{ // '&:after': , '&:before': are pseudo-elements. They let you style a specific part of the selected element
      content: '',
      position: 'absolute',
      left: 0,
      bottom: 0,
      width: '100%',
      height: 4, //height of the actual element, in this case the line
      background: '#fff',
      //to create a line I alwys need the properties width, height and background
      transform: 'scale( 0 , 1 )',
      transition: '$s2'
      //for transformations you always need the two properties transform and transition
    },

    '&:hover': {
      '&:after':{
        transform: 'scale( 1 , 1 )',
      }, // in order to make animation visisble you need to insert, when it will be visible e.g. hover and then add the transform property that you want to display, in this case the change from 0,1 to 1,1 ; the transform only needs to be mentioned once
    }
  }
})


export default function Page() {
  return (

  <SiteContainer align="center" pageBlockSpacing="l3">
    <Square>
      
    <LinkAnimation>
      <Link href="/">
        
          <Heading bold size="l8" title="Work" />
        
      </Link>
    </LinkAnimation>
    
    </Square>
  </SiteContainer>

)
}
