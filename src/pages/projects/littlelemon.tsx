import React from 'react'
import { NextProject, SiteContainer, PageBlock, PageBlockItem, Heading, Text, ProjectInfo, ImageContainer, Video, Hero, ShowcaseStyleguide } from '@components'

export default function Page() {
  return (

    <SiteContainer pageBlockSpacing="l2">
    <PageBlock width="large">
      <Hero 
        width="medium"
        image='/projects/littlelemon/nav-logo.png' altImage=''
        title="Little Lemon Restaurant"
        subTitle="Final project of the Meta front-end developer programme" />
    </PageBlock>

    <PageBlock width="large">
      <ImageContainer 
        image="/projects/littlelemon/headermacbook.png"
        imageAlt="Macbookscreen containing visual representation of the Littlelemon website"
      />
    </PageBlock>

    <ProjectInfo 
      title="Project description"
      descp={
        <>
          <p>
            Little Lemon is a ficticious Chicago based mediterranean restaurant in need of a functional website in order 
            to fulfill customer demands. By utilising the user interface (UI) design process, I created wireframes 
            for features in Figma, and turned them into a minimum viable product (MVP) style prototype.
          </p>
        </>
      }
      projectAttributes={[
        {   
          title: 'Roles / Skills',
          listItems: [
            { title: 'UI/UX Design' },
            { title: 'Front-End Development' },
            
          ]
        },
        { 
          title: 'Project',
          listItems: [
            { title: 'Meta - Front-End Developer Certificate - January 2023' },
            { title: 'Final Project' },
          ]
        }
      ]}
    />
    
    
  
    <PageBlock width="medium" pageBlockItemSpacing="l0">
      <PageBlockItem>
        <Heading heavy size="l5" title="1. Creation of user personas" />
    </PageBlockItem>

      <PageBlockItem>
        <Text>
          <p>
            Scenarios define the stories and context that lead to a particular user or user group visiting your 
            website. They help make a list of the objectives and questions that need to be answered and sovled 
            throughout the customer journey.
          </p>
        </Text>
      </PageBlockItem>
      </PageBlock>

      <PageBlock width="medium">
      <ImageContainer 
        image="/projects/littlelemon/persona.png"
        imageAlt="user persona"
      />
    </PageBlock>

    <PageBlock width="medium" pageBlockItemSpacing="l0">
      <PageBlockItem>
        <Heading heavy size="l5" title="2. Customer journey map" />
      </PageBlockItem>

      <PageBlockItem>
        <Text>
          <p>
            By designing a customer journey map I created a graphical representation of how a customer interacts 
            with the Little Lemon website at various stages. 
          </p>
        </Text>
      </PageBlockItem>
    </PageBlock>

    <PageBlock width="medium">
      <ImageContainer 
        image="/projects/littlelemon/userflow.png"
        imageAlt="userflow"
      />
    </PageBlock>


    <PageBlock width="medium" pageBlockItemSpacing="l0">
      <PageBlockItem>
        <Heading heavy size="l5" title="3. Wireframing" />
      </PageBlockItem>

      <PageBlockItem>
        <Text>
          <p>
            After completing a paper prototype, I developed digital wireframes. Here I concentrated on hierarchical 
            structure and typography along with developing graphic elements.
          </p>
        </Text>
      </PageBlockItem>
    </PageBlock>

    <PageBlock width="large">
      <ImageContainer 
        image="/projects/littlelemon/wireframe.png"
        imageAlt="wireframe"
      />
    </PageBlock>

    <PageBlock width="large">
      <ImageContainer 
        image="/projects/littlelemon/reservationwireframe.png"
        imageAlt="reservationwireframe"
      />
    </PageBlock>

    <PageBlock width="medium" pageBlockItemSpacing="l0">
      <PageBlockItem>
        <Heading heavy size="l5" title="4. Brand style guide" />
      </PageBlockItem>

      <PageBlockItem>
        <Text>
          <p>
            The brand style guide built the foundation for the later creation of the high fidelity designs and a website prototype.
          </p>
        </Text>
      </PageBlockItem>
    </PageBlock>

    <PageBlock width="large">
     <ImageContainer 
        image="/projects/littlelemon/styleguide.png"
        imageAlt="styleguide"
      />
    </PageBlock>

    <PageBlock width="medium">
     <ImageContainer 
        image="/projects/littlelemon/photography.png"
        imageAlt="moodboard photography"
      />
    </PageBlock>

    <PageBlock width="medium" pageBlockItemSpacing="l0">
      <PageBlockItem>
        <Heading heavy size="l5" title="5. From wireframe to high fidelity design" />
      </PageBlockItem>

      <PageBlockItem>
        <Text>
          <p>
            Based on the styleguide and the wireframes I developed high fidelity designs. These build the foundation 
            to be build out later in code. 
          </p>
        </Text>
      </PageBlockItem>
    </PageBlock>

    <PageBlock width="medium">
     <ImageContainer 
        image="/projects/littlelemon/creationprocess.png"
        imageAlt="creationprocess"
      />
    </PageBlock>

    <PageBlock width="medium" pageBlockItemSpacing="l0">
      <PageBlockItem>
        <Heading heavy size="l5" title="6. Website prototype using React and Css" />
      </PageBlockItem>

      <PageBlockItem>
        <Text>
          <p>
            By building a static version of the application I applied my understanding of React, 
            frameworks, routing, hooks, bundlers and data fetching.
          </p>
        </Text>
      </PageBlockItem>
    </PageBlock>

    <PageBlock width="large">
     <ImageContainer 
        image="/projects/littlelemon/prototype.png"
        imageAlt="prototype"
      />
    </PageBlock>

      <NextProject 
        pageLink="./escudo"
        title="Escudo"
        image="/projects/escudo/logo.png"
        altImage="Picture of Water"
      />
      
  </SiteContainer>

)
}