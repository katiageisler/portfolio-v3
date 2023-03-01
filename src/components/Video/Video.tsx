import React from 'react'
import { styled } from '@theme'

const VideoWrap = styled('div', {
	position: 'relative',
	width: '100%',

	video: {
		width: '100%'
	}
})

interface VideoProps {
	src: string
}

export const Video = ({ src }:VideoProps) => {
	return(

		<VideoWrap>
			<video controls>
				<source {...{ src }} type="video/mp4" />
			</video>
		</VideoWrap>

	)
}