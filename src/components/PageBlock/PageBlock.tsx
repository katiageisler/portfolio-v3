import React from "react"
import { styled } from '@theme'

const BlockWrap = styled('div', {
  position: 'relative',
  width: '100%'
})

const BlockContent = styled('div', {
  position: 'relative',
  width: '100%',
  margin: '0 auto',

  variants: {
    width: {
      small: {},
      medium: { maxWidth: 1000, width: '90%' },
      large: { maxWidth: 1300, width: '90%' }
    },

    pageBlockItemSpacing: {
      l0: { '> *:not(:last-child)': { marginBottom: 20 }},
      l1: { '> *:not(:last-child)': { marginBottom: 50 }},
      l2: { '> *:not(:last-child)': { marginBottom: 100 }},
      l3: { '> *:not(:last-child)': { marginBottom: 200 }},

    }
  }
})

interface BlockProps {
  width?: 'small' | 'medium' | 'large'
  pageBlockItemSpacing?: 'l0' | 'l1' | 'l2'
  children: React.ReactNode
}

export const PageBlock = ({ 
    width,
    pageBlockItemSpacing,
    children 
  }:BlockProps) => {
  
    return(

    <BlockWrap>
      <BlockContent {...{ width, pageBlockItemSpacing }}>
        { children }
      </BlockContent>
    </BlockWrap>

  )
}