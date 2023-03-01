import React from 'react'
import { styled } from '@theme'

const SiteWrap = styled('div', {
  position: 'relative',
  width: '100%',
  minHeight: '100vh',
  padding: '150px 0 0',

  variants: {
    pageBlockSpacing: {
      l0: { '> *:not(:last-child)': { marginBottom: 32 }},
      l1: { '> *:not(:last-child)': { marginBottom: 50 }},
      l2: { '> *:not(:last-child)': { marginBottom: 100 }},
      l3: { '> *:not(:last-child)': { marginBottom: 200 }}
    },

    align: {
      center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }
    },

    padding: {
      addPaddingBottom: {
        padding: '150px 0'
      }
    }
  }
})

interface SiteProps {
  align?: 'center'
  pageBlockSpacing?: 'l0' | 'l1' | 'l2'  | 'l3' 
  padding?: 'addPaddingBottom'
  children: React.ReactNode
}

export const SiteContainer = ({ 
    pageBlockSpacing,
    padding,
    align,
    children 
  }:SiteProps) => {
  
    return(

    <SiteWrap {...{ pageBlockSpacing, padding, align }}>
      { children }
    </SiteWrap>

  )
}