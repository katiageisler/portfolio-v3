import React from 'react'
import { styled } from '@theme'
import Link from 'next/link'
import { Heading } from '@components'

const NextProjectWrap = styled('div', {
  position: 'relative',
  width: '100%',
  marginTop: '100px',
  color: '#fff',
  textAlign: 'center',
  overflow: 'hidden',
  img: { transition: '$s3' },

  '&:hover': {
    img: {
      transform: 'scale( 1.1 )'
    }
  }
})

const NextProjectTitle = styled('div', {
  position: 'relative',
  width: '90%',
  margin: '0 auto',
  padding: '125px 0',
  zIndex: 1,

  '> *:not(:last-child)': {
    marginBottom: 12
  }
})

const NextProjectImage = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  opacity: 0.2,
  zIndex: 0
})

interface NextProjectProps {
  title: string
  pageLink: string
  image: string
  altImage: string
}

export const NextProject =({ title, pageLink, image, altImage }:NextProjectProps) => {
  return(

    <Link href={ pageLink }>
      <NextProjectWrap>
        <NextProjectTitle>
          <Heading size="l2" title="Next Project" />
          <Heading heavy size="l8" {...{ title }} />
        </NextProjectTitle>

        <NextProjectImage>
          <img src={ image } alt={ altImage } />
        </NextProjectImage>
      </NextProjectWrap>
    </Link>
    
  )
}