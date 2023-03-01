import React from 'react'
import { styled } from '@theme'
import { Heading } from '@components'

const ListWrap = styled('div', {
  position: 'relative',

  '> *:not(:last-child)': { marginBottom: 16 }
})

const Ul = styled('ul', {
  listStyle: 'none',

  variants: {
    listStyle: {
      bullet: {}
    },

    font: {
      serif: { '*': { fontFamily: '$serif' } },
      sansSerif: { fontFamily: '$sansSerif' }
    },

    spacing: {
      l0: { li: { padding: '4px 0' }},
      l1: { li: { padding: '8px 0' }},
      l2: { li: { padding: '12px 0' }}
    },

    fontSize: {
      l0: {},
      l1: { fontSize: '$s2' },
      l2: {},
      l3: {}
    }
  }
})

interface ListProps {
  title?: string
  font?: 'serif' | 'sansSerif'
  fontSize?: 'l0' | 'l1' | 'l2' | 'l3'
  spacing?: 'l0' | 'l1' | 'l2'
  listItems: {
    title: string
  }[]
}

export const List = ({
    title,
    font,
    spacing,
    listItems,
    fontSize
  }:ListProps) => {
  
  return(

    <ListWrap>
      { title ? ( <Heading heavy size="l3" {...{ title }} /> ) : null }
      
      <Ul {...{ font, fontSize, spacing }}>
        { listItems.map(( item, i ) => (

          <li key={`item-${ i }`}>
            { item.title }
          </li>

        ))}
      </Ul>
    </ListWrap>

  )
}