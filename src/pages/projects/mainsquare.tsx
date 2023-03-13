import React from 'react'
import { NextProject, SiteContainer, PageBlock, PageBlockItem, Heading, Text, ProjectInfo, ImageContainer, Hero, } from '@components'

export default function Page() {
  return (

    <SiteContainer pageBlockSpacing="l2">
    <PageBlock width="large">
      <Hero 
        width='small'
        image='/projects/mainsquare/headerlogo.png' altImage='' 
        title="Mainsquare"
        subTitle="The game changer app for your leisure time" />
    </PageBlock>

    <PageBlock width="medium">
      <ImageContainer 
        image="/projects/mainsquare/Mainsquarechat.jpeg"
        imageAlt="Mainsquarechat"
      />
    </PageBlock>

    <ProjectInfo 
      title="Change the way you learn"
      descp={
        <>
          <p>
            Mainsquare is a global marketplace to search and book instructors for any interest. The platform allows a two-way exchange between instructors and students. 
            Mainsquare enables the user to book sessions with coaches, instructors, tutors, experts, or anyone that can teach something new. 
            The goal is to make personal leisure time better and more productive. Mainsquare makes it easy for users to share their skills with others. 
            The platform takes over the organization where the user saves time and can handle meetings with students more efficiently. 
          </p>
          <p>
            Mainsquare transforms the search for ways to spend leisure time by bringing together teachers, students, and sponsors in one platform. 
          </p>
        </>
      }
      projectAttributes={[
        {   
          title: 'Roles / Skills',
          listItems: [
            { title: 'UX Research' },
            { title: 'Market Research' },
            { title: 'Marketing Strategy' }
          ]
        },
        { 
          title: 'Project',
          listItems: [
            { title: 'Mainsquare: 2018 - 2020' },
            { title: 'CEO: Andrej Tos' },
            { title: 'CTO: Andraz Brehlic' }
          ]
        }
      ]}
    />
    
    <PageBlock width="large">
      <ImageContainer 
        image="/projects/mainsquare/useflowapp.png"
        imageAlt="useflow of mainsquare app"
      />
    </PageBlock>

    <PageBlock width="medium" pageBlockItemSpacing="l0">
      <PageBlockItem>
        <Heading heavy size="l5" title="Mainsquares value proposition"></Heading>
      </PageBlockItem>

      <PageBlockItem>
        <Text>
          <p>
          When it comes to finding activities and fitting instructors many problems arise. 
          Sometimes people spend hours looking for activities on different sites and then refuse doing them because of the complexity or 
          time-consuming booking process. Often the services are only available via Skype meetings, therefore not face-to-face or include high commission fees,
           fake reviews, or identity theft. These problems are attributed to the absence of a transparent and secure platform that 
           directly connects instructors to students. 
          </p>

          <p>
          Here Mainsquare engages - an easy-to-use platform that offers a multitude of services backed by highest safety standards and constant 
          service and quality control. Mainsquare transforms the search for ways to spend leisure time by bringing together teachers, students, 
          and sponsors in one platform. By establishing collaborations with experienced and professional instructors, 
          Mainsquare can provide the highest quality experience. 

          </p>
        </Text>
      </PageBlockItem>
     </PageBlock>

  
    <PageBlock width="medium" pageBlockItemSpacing="l0">
      <PageBlockItem>
        <Heading heavy size="l5" title="1. Project scope" />
    </PageBlockItem>

      <PageBlockItem>
        <Text>
          <p>
            The Mainsquare application needs a smooth user experience with intentional design and 
            use-flows, making it easy for the user to navigate through the website to execute processes easily. 
          </p>

          <p>
            The challenge was to research and construct the different user flows of the app features, 
            to systemize and categorize the different activities offered in a logical way.
          </p>
          <p>
            The interaction design needed to be simple, yet effective excluding any clunky user experience. 
            Information should be organized logically and intuitively. The idea was to pair smart layout
            design with convenient features to prevent the user from feeling overwhelmed.
          </p>
        </Text>
      </PageBlockItem>
      </PageBlock>

    <PageBlock width="medium" pageBlockItemSpacing="l0">
      <PageBlockItem>
        <Heading heavy size="l5" title="2. Creation of the information architecture" />
      </PageBlockItem>

      <PageBlockItem>
        <Text>
          <p>
            To create a good search experience for the customers, the platform needs to be constructed in a
            way that the tutor can choose a predetermined category for the subject they wish to instruct or teach. 
            As there are over 500 categories on Mainsquare, we combined them into clusters or master categories.
          </p>
        </Text>
      </PageBlockItem>
    </PageBlock>

    <PageBlock width="medium">
      <ImageContainer 
        image="/projects/mainsquare/categories.png"
        imageAlt="categories of offered activities"
      />
    </PageBlock>

    <PageBlock width="medium" pageBlockItemSpacing="l0">
      <PageBlockItem>
        <Heading heavy size="l5" title="3. Use-flow creation" />
      </PageBlockItem>

      <PageBlockItem>
        <Text>
          <p>
             
          </p>
        </Text>
      </PageBlockItem>
    </PageBlock>

    <PageBlock width="large">
      <ImageContainer 
        image="/projects/mainsquare/platformflow.png"
        imageAlt="platformflow"
      />
     <ImageContainer 
        image="/projects/mainsquare/dashboardflow.png"
        imageAlt="dashboardflow"
      />
    </PageBlock>

    <PageBlock width="medium" pageBlockItemSpacing="l0">
      <PageBlockItem>
        <Heading heavy size="l5" title="4. Wireframing" />
      </PageBlockItem>

      <PageBlockItem>
        <Text>
          <p>
          Based on the generated user flows the wireframing process started. 
          The aim was to create a user interface that is clear and simple, and where the user can intuit the 
          next possible step in the app. 
          </p>
        </Text>
      </PageBlockItem>
    </PageBlock>

    <PageBlock width="large">
      <ImageContainer 
        image="/projects/mainsquare/wireframe.png"
        imageAlt="wireframe of the mainsquare app"
      />
    </PageBlock>


    <PageBlock width="medium" pageBlockItemSpacing="l0">
      <PageBlockItem>
        <Heading heavy size="l5" title="5. Visual design & mockup" />
      </PageBlockItem>

      <PageBlockItem>
        <Text>
          <p>
          Based on the wireframes a first app interface was developed to be validated by primary research.
          </p>
        </Text>
      </PageBlockItem>
    </PageBlock>

    <PageBlock width="large">
      <ImageContainer 
        image="/projects/mainsquare/macbook.png"
        imageAlt="Visual Design & Mockup of the app"
      />
      
    </PageBlock>

    <PageBlock width="medium" pageBlockItemSpacing="l0">
      <PageBlockItem>
        <Heading heavy size="l5" title="6. Primary research & usability testing" />
      </PageBlockItem>

      <PageBlockItem>
        <Text>
          <p>
          In order to acquire insights into the functional interface of the app and how the flow affects the navigation in the app 
          primary research was conducted. The first step included moderated a focus group with 5 participants. They were asked to 
          test the application and afterwards we were discussion potential imporvement possibilities. 
          </p>
        </Text>
        <Text>
          <p>
            Additionally we created a closed question survey including a visual of the app and explaining its features. The answers of the 45
            participants gave valuable insghts about product acceptance.
          </p>
        </Text>
      </PageBlockItem>
    </PageBlock>

    <PageBlock width="medium" pageBlockItemSpacing="l0">
      <PageBlockItem>
        <Heading heavy size="l5" title="7. Final product development" />
      </PageBlockItem>

      <PageBlockItem>
        <Text>
          <p>
          The primary research results gave valuable insights and led to some design adjustments of App to increase user 
          experience. We reduced the complexity of classes users can choose from and based on the results we developed a 
          fitting Go-To-Market strategy. The website launched in May 2019.
          </p>
        </Text>
      </PageBlockItem>
    </PageBlock>

    <PageBlock width="large">
      <ImageContainer 
        image="/projects/mainsquare/finalapp.png"
        imageAlt="screen showcasing the final app"
      />
    </PageBlock>

    <NextProject 
        pageLink="./producer"
        title="Producer"
        image="/projects/producer/footer.png"
        altImage="Producer Website"
      />
  </SiteContainer>

)
}
