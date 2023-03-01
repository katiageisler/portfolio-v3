import React from 'react'
import { styled } from '@theme'
import { Heading } from '@components'
import Link from 'next/link'

const ProjectoverviewWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  height: 'calc( 100vh - 250px )'
})

const ProjectoverviewLinks = styled('ul', {
  position: 'relative',
  width: '90',
  color: '$white',
  fontSize: '$s4',
  textAlign: 'center',
  listStyle: 'none',
  

  '> *:not(:last-child)': {
    marginBottom: 32
  },

  a: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    '*': { fontFamily: '$serif' },
    
    '&:after': {
      content: '',
      position: 'absolute',
      width: '100%',
      height: 4,
      background: '#fff',
      marginTop: 16,
      transition: '$s2',
      transform: 'scale( 0, 1 )'
    },

    '&:hover': {

      '&:after': {
        transform: 'scale( 1, 1 )'
      }
    }
  }
})

const ProjectContent = styled('div', {

})

interface ProjectoverviewProps {
  children: React.ReactNode

}


export const ProjectOverview = ({}:ProjectoverviewProps) => {
  return(
    <ProjectoverviewWrapper>
      <ProjectContent>
        <ProjectoverviewLinks>
          <li><Link href="/projects/producer"><Heading size="l9"  title="Producer" /></Link></li>
          <li><Link href="/projects/trendwick"><Heading size="l9"  title="Trendwick" /></Link></li>
          <li><Link href="/projects/littlelemon"><Heading size="l9"  title="Little Lemon" /></Link></li>
          <li><Link href="/projects/escudo"><Heading size="l9" title="Escudo" /></Link></li>
          <li><Link href="/projects/mainsquare"><Heading size="l9"  title="Mainsquare" /></Link></li>
        </ProjectoverviewLinks>
      </ProjectContent>
    </ProjectoverviewWrapper>
  )
}
