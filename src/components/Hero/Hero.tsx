import React from "react"
import { styled } from '@theme'
import { Heading } from '@components'

const HeroWrap = styled('div', {
  position: 'relative',
  width: '100%',

  '> *:not(:last-child)': {
    marginBottom: 50
  }
})


const HeroLogo = styled('div', {
  position: 'relative',
  width: 160,
  display:'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',

  variants: {
    width: {
      small: { width: 120 },
      medium: { width: 350 },
    }
  },

  '> *:not(:last-child)': {
    marginBottom: 30
  }

})

const HeroHeading = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  textAlign: 'center',

  '> *:not(:last-child)': {
    marginBottom: 20
  }
})

interface HeroProps {
  width?: 'small' | 'medium'
  title?: string
  subTitle: string
  image: string
  altImage: string
}

export const Hero = ({ altImage, title, subTitle, image, width }:HeroProps) => {
  return(

    <HeroWrap>
      <HeroHeading>
        <HeroLogo {...{ width }}>
          <img src={ image } alt={ altImage } />
        </HeroLogo>
        <Heading heavy size="l9" {...{title}} />
        <Heading size="l5" title={ subTitle } />
      </HeroHeading>
    </HeroWrap>
  )
}