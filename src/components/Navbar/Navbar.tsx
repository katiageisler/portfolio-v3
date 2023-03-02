import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { styled } from '@theme'
import { Heading } from '@components'

const NavbarWrapper = styled('header',{ 
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  zIndex: 9999,
  transition: '$s1',

  '&:before, &:after': {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },

  '&:before': {
    backdropFilter: 'blur( 10px )',
    zIndex: 0
  },

  '&:after': {
    background: 'rgba( 25,24,30, 0.5 )',
    zIndex: 1
  },

  variants: {
    state: {
      active: {},
      hidden: { transform: 'translate3d(0, -100%, 0)' } 
    }
  }
})

const NavbarContent = styled('div',{
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  position: 'relative',
  width: '92%',
  margin: '0 auto',
  padding: '32px 0',
  zIndex: 2
})

const NavbarAnimation = styled('div', {
  
  a: {
    display: 'block',
    position: 'relative',
    paddingBottom: 10,

    '&:after': {
      content: '',
      position: 'absolute',
      bottom: 0,
      left: 0,
      background: '#fff',
      height: 2,
      width: '100%',
      transform: 'scale(0, 1)',
      transition: '$s2'
    },

    '&:hover': {
      '&:after': {
        transform: 'scale(1, 1)'
      }
    }
  }
})


const NavBarLinks = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  position: 'relative',

  '> *:not(:last-child)': {
    marginRight: 12
  },
  
  
})

const NavbarLogo = styled('div',{
 
})


interface NavbarProps {

}


export const Navbar = ({}:NavbarProps) => {
  const [ show, setShow ] = useState( true )

  useEffect(() => {
    let prevScrollpos = window.pageYOffset

    window.onscroll = function () {
      const currentScrollPos = window.pageYOffset
      if ( prevScrollpos > currentScrollPos || currentScrollPos < 100 ) {
        setShow(true)
      } else {
        setShow(false)
      }
      prevScrollpos = currentScrollPos
    }
  }, [])
  
  return(

    <NavbarWrapper state= { show ? 'active' : 'hidden'}>
      <NavbarContent>
        <Link href="/">
          <Heading size="l2" bold title="Katia Geisler" />
        </Link>
          <NavbarAnimation>
            <NavBarLinks>
              <Link href="/"><Heading size="l2" bold title="Work" /></Link>
              <Link href="/about"><Heading size="l2" bold title="About" /></Link>
              <Link href="mailto:katia.leitegeisler@gmail.com"><Heading size="l2" bold title="Contact" /></Link>
            </NavBarLinks>
          </NavbarAnimation>
      </NavbarContent>
    </NavbarWrapper>
    

  )
}


