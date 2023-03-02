import React from 'react'
import { styled } from '@theme'
import Link from 'next/link'
import { SiteContainer, PageBlock, PageBlockItem, Heading, Text, SocialIcons } from '@components'


export default function Page() {
  return (

    <SiteContainer align="center" pageBlockSpacing="l1" padding="addPaddingBottom">
      <PageBlock width="medium" pageBlockItemSpacing="l0">
        <PageBlockItem>
          <Heading heavy size="l6" title="Katia Geisler" />
        </PageBlockItem>

        <PageBlockItem>
          <Text>
            <p>
              My name is Katia Geisler, UX researcher and junior front-end developer. 
              I have a Bachelors degree in business psychology and consumer behavior and a double Masters degree in 
              international management and purchasing and supply chain management.
            </p>

            <p>
              My career draws on a diverse background, with roots in marketing and business development in corporate and 
              startup environments. My experience ranges from brand communication, managing business objectives, 
              conducting market research and designing market entry strategies.
              To lay a deeper foundation for my passion for technology and user centred applications I  
              expanded my skills doing a specialization in front-end development. 
            </p>
            
            <p>
              I enjoy the challenge of achieving visual unity in a 
              composition as much as finding creative solutions using JavaScript and React.
            </p>

            <Link href="projects/about/CV Katia Geisler.pdf">
              <Heading title="Résumé"/>
            </Link>
          </Text>
        </PageBlockItem>

        <PageBlockItem>
          <SocialIcons />
        </PageBlockItem>
      </PageBlock>
    </SiteContainer>

  ) 
}
