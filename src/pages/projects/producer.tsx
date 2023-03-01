import React from 'react'
import { NextProject, SiteContainer, PageBlock, PageBlockItem, Heading, Text, ProjectInfo, ImageContainer, Video, Hero, ShowcaseStyleguide } from '@components'

export default function Page() {
  return (

    <SiteContainer pageBlockSpacing="l2">
    <PageBlock width="large">
      <Hero 
        image='/projects/producer/producer.png' altImage=''
        title="Producer"
        subTitle="The one stop match-making platform for communication services" />
    </PageBlock>

    <PageBlock width="large">
          <Video src="/projects/producer/PRODUCER__.webm" />
        </PageBlock>

    <ProjectInfo 
      title="A disruptor in the communication sector"
      descp={
        <>
          <p>
            Producer is a match-making platform for communication services. Producer allows users to order all kinds of communication 
            services online in a centralised way, with just a few mouse clicks due to intuitive briefings. From translation to infographics 
            to social media content - it's all there.
          </p>
          <p>
            Thanks to Producer, hours of searching for service providers or eternal feedback loops with agencies are a thing of the past. 
            Producer finds the ideal match between client and suitable service provider. The entire process is handled seamlessly and 
            centrally on one platform - prices are calculated in real time and project progress can be tracked live via a dashboard. 
            With well thought-out structures, optimised processes, precise algorithms and AI, Producer changes the world of communication.
          </p>
        </>
      }
      projectAttributes={[
        {   
          title: 'Roles / Skills',
          listItems: [
            { title: 'Business Development' },
            { title: 'Marketing Strategy' },
            { title: 'Ux/UI Design' }
          ]
        },
        { 
          title: 'Project',
          listItems: [
            { title: 'Producer: 2021 - 2022' },
            { title: 'CEO: David Wendelborn & Viorica Mic' },
            { title: 'UX/UI Design: Jan Marx' }
          ]
        }
      ]}
    />
    
   
  
  <PageBlock width="medium" pageBlockItemSpacing="l0">
    <PageBlockItem>
        <Heading heavy size="l5" title="1. Project scope" />
    </PageBlockItem>

      <PageBlockItem>
        <Text>
          <p>
            I worked in a team of four people to design the Go-To-Market strategy for Producer, 
            including the business development and the marketing strategy. Apart from that I was involved in the construction of the different user flows and service 
            offerings of the Producer platform.
          </p>
          <p>
            To ensure a smooth purchasing process, for each service offering a different order configurator needed to be created, making sure users are able to 
            order the desired service in a fast, easy and streamlined way. 
          </p>
        </Text>
      </PageBlockItem>
   </PageBlock>

    <PageBlock width="medium" pageBlockItemSpacing="l0">
      <PageBlockItem>
        <Heading heavy size="l5" title="2. Process flow design" />
      </PageBlockItem>

      <PageBlockItem>
        <Text>
          <p>
            The is an almost endless amount of communication services to chose from and one very crucial element was to narrow 
            down which services we want to offer on the platform.
          </p>
          <p>
            The second challenge was to establish a clear process flow within the platform to allow easy navigation. 
            Special emphasis was placed on the clear task delegation after order placement, complaints management and delivery. 
          </p>
        </Text>
      </PageBlockItem>
    </PageBlock>

    <PageBlock width="large">
      <ImageContainer 
        image="/projects/producer/processflow.png"
        imageAlt="processflow"
      />
    </PageBlock>

    <PageBlock width="large">
      <ImageContainer 
        image="/projects/producer/orderprocessing.png"
        imageAlt="order processing flow"
      />
    </PageBlock>

    <PageBlock width="medium" pageBlockItemSpacing="l0">
      <PageBlockItem>
        <Heading heavy size="l5" title="3. Definition of service range & creation of configurators" />
      </PageBlockItem>

      <PageBlockItem>
        <Text>
          <p>
            The first step was to define the service range Producer will be offering to its clients. The second step entailed to
            break down the complex order process of a service offering into simple steps that can be translated into a configurator. Depending on the commication service 
            the creation varied in complexity. Some services needed to be broken into subcategories and others fully excluded.
          </p>
        </Text>
      </PageBlockItem>
    </PageBlock>

    <PageBlock width="large">
      <ImageContainer 
        image="/projects/producer/servicerange.png"
        imageAlt="service range of the producer app"
      />
    </PageBlock>

    <PageBlock width="medium" pageBlockItemSpacing="l0">
      <PageBlockItem>
        <Heading heavy size="l5" title="4. Visual design & mockup" />
      </PageBlockItem>

      <PageBlockItem>
        <Text>
          <p>
            Based on the different substeps the creation of the configurator prototypes started. 
            The aim was to create a user interface that is clear and simple where the user can intuit the 
            next possible step in the app and track order progress within the dashboard. 
          </p>
        </Text>
      </PageBlockItem>
    </PageBlock>

    <PageBlock width="large">
     <ImageContainer 
        image="/projects/producer/configuratormockup.png"
        imageAlt="configurator mockup"
      />
    </PageBlock>

    <PageBlock width="medium" pageBlockItemSpacing="l0">
      <PageBlockItem>
        <Heading heavy size="l5" title="5. Testing & beta launch" />
      </PageBlockItem>

      <PageBlockItem>
        <Text>
          <p>
            The developed configurators and the dashboard were tested through our team as well as from test clients and our service providers to find potetial bottle necks and to 
            increase the order flow. The beta launch of <a href="https://producer.works/">Producer </a> with five different services followed in July 2021. 
          </p>
        </Text>
      </PageBlockItem>
    </PageBlock>
      <NextProject 
        pageLink="./trendwick"
        title="Trendwick"
        image="/projects/trendwick/test.png"
        altImage="Trendwick App"
      />
  </SiteContainer>

)
}
