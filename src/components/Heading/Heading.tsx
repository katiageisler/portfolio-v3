import React from 'react'
import { styled } from '@theme'

// For the master container of the heading component
// This allows the control of the font size and the font weight

const HeadingWrap = styled('div', {
  position: 'relative',
  width: '100%'
})

// For the container of the heading within the master container
// This controls the sizes that the heading can be

const HeadingContent = styled('div', {
  position: 'relative',
  width: '100%',

  variants: {
    size: {
      l0: { fontSize: '$s0' },
      l1: { fontSize: '$s1' },
      l2: { fontSize: '$s2' },
      l3: { fontSize: '$s3' },
      l4: { fontSize: '$s4' },
      l5: { fontSize: '$s5' },
      l6: { fontSize: '$s6' },
      l7: { fontSize: '$s7' },
      l8: { fontSize: '$s8' },
      l9: { fontSize: '$s9' },
      l10: { fontSize: '$s10' }
    }
  }
})

// For the container of the <strong> tag to make the font weight bold

const FontSizeBold = styled('strong', {
  fontFamily: '$sansSerifBold'
})

// For the container of the <strong> tag to make the font weight heavy

const FontSizeHeavy = styled('strong', {
  fontFamily: '$sansSerifHeavy'
})


// ----------- Typescript declarations ----------- //

interface HeadingProps {
  bold?: boolean
  heavy?: boolean
  title: any
  size?: 'l0' | 'l1' | 'l2' | 'l3' | 'l4' | 'l5' | 'l6' | 'l7' | 'l8' | 'l9' | 'l10'
}

// ------------- End of declarations ------------- //

export const Heading = ({
    title,
    bold,
    heavy,
    size
  }:HeadingProps) => {
  
  return(

    <HeadingWrap>
      <HeadingContent {...{ size }}>
        { 
          bold ? <FontSizeBold>{ title } </FontSizeBold> :
          heavy ? <FontSizeHeavy>{ title }</FontSizeHeavy> :
          <>{ title }</>
        }
      </HeadingContent>
    </HeadingWrap>

  )
}
