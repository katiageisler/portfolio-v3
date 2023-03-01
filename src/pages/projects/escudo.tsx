import React from 'react'
import { NextProject, SiteContainer, PageBlock, PageBlockItem, Heading, Text, ProjectInfo, ImageContainer, Hero } from '@components'
import Link from 'next/link'

export default function Page() {
  return (

    <SiteContainer pageBlockSpacing="l2">

      
    <PageBlock width="large">
      <Hero 
     image='/projects/escudo/headerlogo.png' altImage=''
     title="Escudo"
     subTitle="A surfboard cover that protects the surfboard and the sea" />
    </PageBlock>

    <PageBlock width="medium">
      <ImageContainer 
        image="/projects/escudo/surfer.jpg"
        imageAlt="Picture of a surfer in the ocean"
      />
    </PageBlock>

    <ProjectInfo 
      title="Sustainability as core value"
      descp={
        <>
          <p>
            Escudo is a sustainable, high quality fabric surfboard cover brand. Made from 100% recycled SEAQUALTM polymer, 
            certified and traceable as ‘upcycled marine plastic’, Escudo products offer surfboard protection while helping to 
            reduce plastic pollution in the oceans. 
          </p>
          <p>
            The covers are an innovative, high end niche product tailored to the trends and needs within the surfing community 
            helping prevent damage from sun or transport.
          </p>
          <p>
            Escudo combines sustainable values with smart branding to engage the next generation of buyers and answer market 
            demands. Sustainability is placed at the core of Escudoss brand identity to make an important contribution to the 
            protection of the planet. 
          </p>
        </>
      }
      projectAttributes={[
        {   
          title: 'Roles / Skills',
          listItems: [
            { title: 'Development of Product Prototype' },
            { title: 'Branding & Go-To-Market Strategy' },
            { title: 'Market Research' }
          ]
        },
        { 
          title: 'Project',
          listItems: [
            { title: 'ISCTE Master Thesis Project - 2019' },
          ]
        }
      ]}
    />
    
    <PageBlock width="medium" pageBlockItemSpacing="l0">
      <PageBlockItem>
        <Heading heavy size="l5" title="Project scope"></Heading>
      </PageBlockItem>

      <PageBlockItem>
        <Text>
          <p>
            The objective of the project is the elaboration of a viable business plan for the surfboard cover brand Escudo. 
            This business plan studies the viability of the creation of a company  competing in the surf accessories industry in Portugal, 
            producing sustainable, high-quality surfboard covers made out of ocean waste. 
          </p>
          <p>
            In order to develop the business plan, the methodology of strategic business planning is used with the sub steps containing:
          </p>
          <p>
            1. Conducting strategic business review 
          </p>
          <p>
            2. Business visioning 
          </p>
          <p>
            3. Business strategy development
          </p>
          <p>
            4. Implementation formulation 
          </p>
        </Text>
      </PageBlockItem>
     </PageBlock>

    <PageBlock width="medium" pageBlockItemSpacing="l0">
      <PageBlockItem>
        <Heading heavy size="l5" title="1. Problem definition & research questions" />
    </PageBlockItem>

      <PageBlockItem>
        <Text>
          <p>
            The idea for Escudo is based on my passion for surfing and love for the environment. After purchasing my first surfboard I encountered a problem: 
            Surfboards are quite expensive and need protection from environmental influences they need a protective cover.
            I was unable to find a fitting cover - either the right size for my surfboard was not available, the desigs where questionable and not 
            made out of good materials and very expensive. At the same time 12 Million Tons of plastic are dumped into our oceans - every single day.
          </p>
          <p>
            So why not create a functional product that helps protect both?
          </p>
          <p>
            1. How to create a surfboard cover that both protects the surfboard and the sea?  
          </p>
          <p>
            2. Is there a product gap in the surfboard cover market? 
            And if yes, is the market potential big enough to establish a new product in the market?
          </p>
          <p>
            3. What should the ideal product look like? Which materials should be used?
          </p>
        </Text>
      </PageBlockItem>
      </PageBlock>

    <PageBlock width="medium" pageBlockItemSpacing="l0">
      <PageBlockItem>
        <Heading heavy size="l5" title= "2. Market analysis" />
      </PageBlockItem>
      <PageBlockItem>
        <Text>
          <p>
            A thorough market analysis of the surf industry was conducted, to gain deeper market understanding, 
            analyse the market potential and identify market trends. It revealed favourable insights to further pursue the business idea.
          </p>
        </Text>
      </PageBlockItem>
    </PageBlock>

    <PageBlock width="medium">
      <ImageContainer 
        image="/projects/escudo/research.png"
        imageAlt="Research findings"
      />
    </PageBlock>

    <PageBlock width="medium" pageBlockItemSpacing="l0">
      <PageBlockItem>
        <Heading heavy size="l5" title= "3. Analysis of target market and consumer profile" />
      </PageBlockItem>
      <PageBlockItem>
        <Text>
          <p>
            Escudos target group is very interested in the surf lifestyle as well as in topics such as social responsibility. 
            The main target group are surfers in an age range from 24 till their mid 30’s. The target group shows a tendency of 
            being more educated and having higher income levels than the general public (50.000$ – 99.999$). 
            They incorporate the surf lifestyle in their daily routines, for  example by wearing surf inspired brands. 
            They also strongly pronounce environmentally friendly preferences and inform themselves about product origins and 
            their brand promises before conducting a purchase.  
          </p>
        </Text>
      </PageBlockItem>
    </PageBlock>

    <PageBlock width="medium">
      <ImageContainer 
        image="/projects/escudo/profile.jpg"
        imageAlt="Infografic showcasing typical surfer, source: http://www.waveloch.com/surfing-demographics"
      />
    </PageBlock>

    <PageBlock width="medium" pageBlockItemSpacing="l0">
      <PageBlockItem>
        <Heading heavy size="l5" title= "4. Competitive analysis" />
      </PageBlockItem>
      <PageBlockItem>
        <Text>
          <p>
            The product portfolio of 30 surfboard brands is analyzed with regard to the presence of surfboard covers within their product range. 
            The comparison focus is primarily on the materials used, the quality and especially the price structure. 
            The competitor analysis shows that this specific market is little exploited and has so far been penetrated by only a 
            few providers. Only four providers have increasingly embarked on the offer of surfboard covers, 
            making room for a new and innovative product.
          </p>
        </Text>
      </PageBlockItem>
    </PageBlock>

    <PageBlock width="medium">
      <ImageContainer 
        image="/projects/escudo/Surfbrands.png"
        imageAlt="Map of 30 surfbrands"
      />
    </PageBlock>

    <PageBlock width="medium" pageBlockItemSpacing="l0">
      <PageBlockItem>
        <Heading heavy size="l5" title="5. Prototype development & material selection" />
      </PageBlockItem>

      <PageBlockItem>
        <Text>
          <p>
            Based on the previous findings a first prototype was designed and produced. 
            The aim was to put the physical product in front of a user-group to observe how they interact with the product, 
            as well as to find out what aspects of the design need to be improved.
          </p>
          <p>
            As material choice I decided to use 100% recycled SEAQUALTM polymer. The choice lays grounded in the fact that SEAQUAL 
            is an initiative collaborating with fishermen, NGO’S, local communities and authorities cleaning the oceans of marine litter 
            and upcycling the litter to sustainable and durable fabrics.
          </p>
        </Text>
      </PageBlockItem>
    </PageBlock>

    <PageBlock width="medium">
      <ImageContainer 
        image="/projects/escudo/seaqual.jpg"
        imageAlt="Seaqual production process"
      />
    </PageBlock>

    <PageBlock width="medium" pageBlockItemSpacing="l0">
      <PageBlockItem>
        <Heading heavy size="l5" title="6. Primary research" />
      </PageBlockItem>

      <PageBlockItem>
        <Text>
          <p>
            In order to gain a better understanding of the surf market and especially the consumer behavior, 
            primary research in the form of industry expert interviews as well as a survey alongside a group of 79 surfers 
            was conducted. The respondents are asked questions about their perception of existing products and brands on the 
            market and asked to evaluate a product sample of Escudo. The isights gained led to some product adjustments and 
            gave inspiration for the final product branding.
          </p>
        </Text>
      </PageBlockItem>
    </PageBlock>

    <PageBlock width="medium" pageBlockItemSpacing="l0">
      <PageBlockItem>
        <Heading heavy size="l5" title="7. Branding" />
      </PageBlockItem>

      <PageBlockItem>
        <Text>
          <p>
            The Escudo logo can be divided into 3 main elements – Surfboard, wave and shield. The elements have been carefully 
            chosen based on their meanings in terms of Escudos brand values.
          </p>
          <p>
            At first glance a surfboard is visible, which represents the nature of the product. 
            At the same time, however, this symbol transforms also into a leaf, symbolizing the ecological benefit of the 
            product and reflects its connection to nature. The waves represent a force of nature, which the Surfboard has to defy, 
            and the motifs are framed in a circle, an 'Escudo', which represents the reference to the brand name  
            and at the same time represents a protective shield. 
          </p>
          <p>
            The colors are in natural tones, such as blue and green, to indicate the ecological connection and the closeness to 
            nature. 
          </p>
        </Text>
      </PageBlockItem>
    </PageBlock>

    <PageBlock width="large">
      <ImageContainer 
        image="/projects/escudo/logo.png"
        imageAlt="escudo logo"
      />
    </PageBlock>

    <PageBlock width="medium" pageBlockItemSpacing="l0">
      <PageBlockItem>
        <Heading heavy size="l5" title="8. Final product development" />
      </PageBlockItem>

      <PageBlockItem>
        <Text>
          <p>
            Some changes were made to the final product, making it more appealing to the target group:
          </p>
          <p>
            - The inside of the surfboard cover is now lined with a heat-resistant material, preventing the surfboard wax from 
            heating up inside and, coming into contact with the fabric, so that no sticking is possible.
          </p>
          <p>
           -  An additional bag on the outside of the cover was added, enabling users to store small things, such as 
           surfboard wax, sunglasses, or a wallet. 
          </p>
          <p>
            - The integrated shoulder strap was broadened, making it possible to transport the board more comfortably. 
          </p>
        </Text>
      </PageBlockItem>
    </PageBlock>

    <NextProject 
      pageLink="./mainsquare"
      title="Mainsquare"
      image="/projects/mainsquare/wireframemainsquare.png"
      altImage="Mainsquare image"
    />
  </SiteContainer>
)
}
