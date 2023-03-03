import React from 'react'
import { styled } from '@theme'

// For the master container of the text component
// This holds the automations of spacing and the text size of the content within the component

const TextWrap = styled('div', {
  position: 'relative',
  width: '100%'
})

// For the container of all of the content within the master container
// This holds the content spacing of all of containers and the different font sizes of the text

const TextContent = styled('div', {
  position: 'relative',
  maxWidth: 1100,
  width: '100%',
  lineHeight: 1.5,
  fontSize: '$s4',
  '*': { fontFamily: '$serif' },
  '> *:not(:last-child)': { marginBottom: 20 },

  a: {
    textDecoration: 'underline'
  },  

  // This is to account for the spacing between the content blocks and the size of the text

  variants: {
    contentSpacing: {
      l0: { '> *:not(:last-child)': { marginBottom: 8 }},
      l1: { '> *:not(:last-child)': { marginBottom: 8 }},
      l2: { '> *:not(:last-child)': { marginBottom: 8 }}
    },

    font: {
      serif: {},
      sansSerif: { fontFamily: '$sansSerif' }
    },

    fontSize: {
      l0: { fontSize: '$s0' },
      l1: { fontSize: '$s1' }
    }
  }
})

// ----------- Typescript declarations ----------- //

interface TextProps {
  contentSpacing?: 'l0' | 'l1' | 'l2'
  font?: 'sansSerif'
  fontSize?: 'l0' | 'l1'
  children: React.ReactNode
}

// ------------- End of declarations ------------- //

export const Text = ({ 
    contentSpacing,
    font,
    fontSize,
    children 
  }:TextProps) => {
  
  return(

    <TextWrap>
      <TextContent {...{ contentSpacing, font, fontSize }}>
        { children }
      </TextContent>
    </TextWrap>

  )
}