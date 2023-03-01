import React from 'react'
import { styled } from '@theme'
import { PageBlock, PageBlockItem, Heading, ListContainer, Text } from '@components'

const IntroHeading = styled('div', {
  position: 'relative',
  width: '100%',

  '> *:not(:last-child)': {
    marginBottom: 12
  }
})

interface InfoProps {
  title: string
  subTitle?: string
  descp: string | React.ReactNode
  projectAttributes: {
    title?: string
    font?: 'serif' | 'sansSerif'
    spacing?: 'l0' | 'l1' | 'l2'
    listItems: {
      title: string
    }[]
  }[]
}

export const ProjectInfo = ({
    title,
    subTitle,
    descp,
    projectAttributes
  }:InfoProps) => {
  
  return(

    <PageBlock width="medium" pageBlockItemSpacing="l1">
      <IntroHeading>
        <Heading heavy size="l8" {...{ title }} />
        { subTitle ? ( <Heading heavy size="l5" title={ subTitle } /> ) : null }
      </IntroHeading>
        
      <PageBlockItem>
        <Text>{ descp }</Text>
      </PageBlockItem>
      
      <PageBlockItem>
        <ListContainer 
          spacing='l1'
          font="serif"
          fontSize="l1"
          lists={ projectAttributes }
        />
      </PageBlockItem>
    </PageBlock>

  )
}