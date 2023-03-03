import React from "react"
import { styled } from '@theme'

const SocialWrap = styled('div', {
  position: 'relative',
	paddingTop: 32,

	// Display the icons inline 

	ul: { 
    display: 'flex'
  },

	// For the box container of the icons
	// This has the border and the background that animates in on hover

	li: {
		display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
		position: 'relative',
		width: 50,
		height: 50,
		border: '1px solid #6f6f6f',
		borderRadius: '$r1',
		overflow: 'hidden',

		// Spacing between the icons, excpect for the last item in the list

		'&:not(:last-child)': {
			marginRight: 12
		},

		// For the background that animates in on hover

		'&:before': {
			content: ' ',
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			background: '#fff',
			transform: 'translateY( 100% )',
      transition: '$s2',
      zIndex: 0
		},

		// On hover, how the background and the change the color of the icon

		'&:hover': {
      svg: { fill: '#000' },
      '&:before': { transform: 'translateY( 0px )' }
		}
	},

	// For the container of the icon link
	// This sits full with and height inside of the container

	a: {
		display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
		position: 'relative',
		width: '100%',
		height: '100%'
	},

	// For the color and sizing of the icon within the container

	svg: {
		fill: '#fff',
		width: 30,
		height: 30,
    transition: '$s1'
	}
})

export const SocialIcons = () => {
  return(

    <SocialWrap>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/katia-geisler-584134122/" target="_blank" title="LinkedIn" rel="noreferrer">
            <svg viewBox="0 0 512 512">
              <path d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z"></path>
            </svg>
          </a>
        </li>
      
        <li>
        	<a href="https://github.com/katiageisler/portfolio" target="_blank" title="GitHub" rel="noreferrer">
        		<svg viewBox="0 0 512 512">
							<path d="M256,9.1C116.2,9.1,2.8,122.4,2.8,262.3C2.8,374.1,75.4,469,176,502.5c12.7,2.3,17.3-5.5,17.3-12.2
								c0-6-0.2-21.9-0.3-43.1c-70.4,15.3-85.3-33.9-85.3-33.9c-11.5-29.2-28.1-37-28.1-37c-23-15.7,1.7-15.4,1.7-15.4
								c25.4,1.8,38.8,26.1,38.8,26.1c22.6,38.7,59.3,27.5,73.7,21c2.3-16.4,8.8-27.5,16.1-33.8C153.6,367.7,94.5,346,94.5,249
								c0-27.6,9.9-50.2,26.1-67.9c-2.6-6.4-11.3-32.1,2.5-67c0,0,21.3-6.8,69.6,26c20.2-5.6,41.8-8.4,63.4-8.5c21.5,0.1,43.2,2.9,63.4,8.5
								c48.3-32.8,69.5-26,69.5-26c13.8,34.9,5.1,60.6,2.5,67c16.2,17.7,26,40.3,26,67.9c0,97.3-59.2,118.7-115.6,124.9
								c9.1,7.8,17.2,23.3,17.2,46.9c0,33.8-0.3,61.1-0.3,69.4c0,6.8,4.6,14.6,17.4,12.2c100.5-33.5,173-128.4,173-240.2
								C509.2,122.4,395.8,9.1,256,9.1z"/>
						</svg>
        	</a>
        </li>
      </ul>
    </SocialWrap>

  )
}