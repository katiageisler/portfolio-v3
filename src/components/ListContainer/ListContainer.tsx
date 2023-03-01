import React from 'react'
import { styled } from '@theme'
import { List } from '@components'

const ListWrap = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  position: 'relative',
  width: '100%',

  '> *:not(:last-child)': {
    marginRight: 100
  }
})

interface ListProps {
  spacing?: 'l0' | 'l1' | 'l2'
  font?: 'serif' | 'sansSerif'
  fontSize?: 'l0' | 'l1' | 'l2' | 'l3'
  lists: {
    title?: string
    listItems: {
      title: string
    }[]
  }[]
}

export const ListContainer = ({ lists, spacing, font, fontSize }:ListProps) => {
  return(

    <ListWrap>
      { lists.map(( list, i ) => (
        <List 
          key={`list-${ i }`} 
          font={ font }
          fontSize={ fontSize }
          spacing={ spacing }
          title={ list.title }
          listItems={ list.listItems } 
        />
      ))}
    </ListWrap>

  )
}