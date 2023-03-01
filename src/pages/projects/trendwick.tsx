import React from 'react'
import { NextProject, SiteContainer, PageBlock, PageBlockItem, Heading, Text, ProjectInfo, ImageContainer, Video, Hero, ShowcaseStyleguide } from '@components'

export default function Page() {
  return (

      <SiteContainer pageBlockSpacing="l2">
        <PageBlock width="large">
          <Hero 
            width="medium"
            image='/projects/trendwick/logo.png' altImage='' 
            title=''
            subTitle="The virtual closet revolutionizing your shopping experience" />
        </PageBlock>

        <PageBlock width="large">
        <center>
        <iframe 
        width= "100%" height="530px" 
        src="https://www.youtube.com/embed/E1in8cWsLmw" 
        title="YouTube video player" 
        allow="accelerometer; autoplay; 
        clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </center>
          
        </PageBlock>

        <ProjectInfo 
          title="Your virtual closet"
          descp={
            <>
              <p>
                While online retail is booming, more and more stationary retailers experience a decrease in foot traffic and sales. 
                While 75 % of clothing shoppers still prefer to shop physically, they report that stores are not living up to the buying
                behavior of the modern shopper and often do not have the desired item in stock or in the fitting size.
              </p>

              <p>
                Trendwick is a solution-based app to ease the challenges physical stores are facing while turning the shopping experience 
                into a more pleasant and time-efficient experience for the consumer. Trendwicks business model provides a solution both 
                for the modern shopper and the businesses, in a common mission to regain sales and foot traffic.
              </p>
            </>
          }
          projectAttributes={[
            {   
              title: 'Roles / Skills',
              listItems: [
                { title: 'UI/UX Design' },
                { title: 'Market Research' },
                { title: 'Marketing Strategy' }
              ]
            },
            { 
              title: 'Project',
              listItems: [
                { title: 'ISCTE University Project: 2019' },
                { title: 'Financial Analysis: Selma Karaman' },
                { title: 'Viability Study: Mads Blem Bidstrup' }
              ]
            }
          ]}
        />
        
        <PageBlock>
          <ShowcaseStyleguide 
            image="/projects/trendwick/framehero.png"
            imageAlt="Trendwick Styleguide"
          />
        </PageBlock>

        <PageBlock width="medium" pageBlockItemSpacing="l0">
          <PageBlockItem>
            <Heading heavy size="l5" title="Trendwicks value proposition"></Heading>
          </PageBlockItem>

          <PageBlockItem>
            <Text>
              <p>
                The Trendwick app combines the convenience of online shopping with the advantages of the offline shopping experience. 
                The app enables customers to transform their existing wardrobe into a virtual closet, helping them to find exactly 
                what they are looking for by matching desired items with their virtual closet. 
              </p>
              <p>
                Trendwick is a double-sided platform that both operates within B2B and B2C. Trendwick operates as a service provider 
                for its B2C segment to accommodate the current buying behavior of the modern shopper to save them time and to assist 
                them in their purchasing decision while shopping in physical stores or online.  
              </p>
            </Text>
          </PageBlockItem>
         </PageBlock>

        <PageBlock width="medium" pageBlockItemSpacing="l0">
          <PageBlockItem>
            <Heading heavy size="l5" title="1. Research and benchmarking" />
          </PageBlockItem>

          <PageBlockItem>
            <Text>
              <p>
                Primary research in from of industry expert interviews was conducted to create a deeper understanding about the target group, consumer behavior trends 
                and to test product acceptance. The competitive research revealed four indirect competitors to Trendwick. They inhere a similar vision of a digital 
                closet but are not connected to physical stores and do not have the same future objective of digitizing a physical industry of clothing items 
                in department stores.
              </p>
            </Text>
          </PageBlockItem>
        </PageBlock>

        <PageBlock width="medium">
          <ImageContainer 
            image="/projects/trendwick/competitor.png"
            imageAlt="competitor map"
          />
        </PageBlock>

        <PageBlock width="medium" pageBlockItemSpacing="l0">
          <PageBlockItem>
            <Heading heavy size="l5" title="2. Market analysis" />
          </PageBlockItem>

          <PageBlockItem>
            <Text>
              <p>
              A thorough market analysis of the retail clothing sector led to a deeper market understanding. By analyzing the market potential, 
              and identifying market trends, changes in the buying behavior of consumers were discovered. Consumers want an omni channel sales experience combining 
              the benefits of stationary and online shopping. The “ROPO” (“Research Online, Purchase Offline”) consumer phenomenon is on the rise, 
              where shoppers will find all the information they need about a product online, but will make the final purchase in-store.
              </p>
            </Text>
          </PageBlockItem>
        </PageBlock>

        <PageBlock width="medium" pageBlockItemSpacing="l0">
          <PageBlockItem>
            <Heading heavy size="l5" title="3. Analysis of buying scenarios" />
          </PageBlockItem>

          <PageBlockItem>
            <Text>
              <p>
                Various typical buying scenarios where the user wants to purchase a clothing item were analyzed to gain valuable insights for the final buying 
                behavior scenario for the Trendwick app. 
              </p>
            </Text>
          </PageBlockItem>
        </PageBlock>

        <PageBlock width="large">
          <ImageContainer 
            image="/projects/trendwick/scenario1.png"
            imageAlt="buying scenario of fashion buyers"
          />
        </PageBlock>

        <PageBlock width="medium" pageBlockItemSpacing="l0">
          <PageBlockItem>
            <Heading heavy size="l5" title="4. Creation of app use-flow & wireframing" />
          </PageBlockItem>

          <PageBlockItem>
            <Text>
              <p>
                Based on the user flow analysis the wireframing process started. We created a user interface that is clear and simple, 
                and where the user can easily intuit the next possible step in the app. 
              </p>
            </Text>
          </PageBlockItem>
        </PageBlock>

        <PageBlock width="large">
          <ImageContainer 
            image="/projects/trendwick/wireframe.png"
            imageAlt="wireframe"
          />
        </PageBlock>

        <PageBlock width="medium" pageBlockItemSpacing="l0">
          <PageBlockItem>
            <Heading heavy size="l5" title="5. Styleguide" />
          </PageBlockItem>

          <PageBlockItem>
            <Text>
              <p>
                As next step a style guide for the app was developed, serving as guiding tool to transform the wireframes into a first app interface.
              </p>
            </Text>
          </PageBlockItem>
        </PageBlock>

        <PageBlock width="large">
          <ImageContainer 
            image="/projects/trendwick/styleguide.png"
            imageAlt="styleguide"
          />
        </PageBlock>

        <PageBlock width="medium" pageBlockItemSpacing="l0">
          <PageBlockItem>
            <Heading heavy size="l5" title="6. Prototype development" />
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
            image="/projects/trendwick/app.png"
            imageAlt="first app interface"
          />
        </PageBlock>

        <PageBlock width="medium" pageBlockItemSpacing="l0">
          <PageBlockItem>
            <Heading heavy size="l5" title="7. Primary research and final product development" />
          </PageBlockItem>

          <PageBlockItem>
            <Text>
              <p>
                To acquire further insights into the functional interface of the app primary research in the form of 
                a focus group and a closed question survey was conducted. Users were open towards using the system and impressed with the amount of info being displayed,
                but felt the interface could be a lot simpler to navigate. 
              </p>
            </Text>
            <Text>
              <p>
                The primary research results gave valuable insights and led to some design adjustments to increase user experience. 
              </p>
            </Text>
          </PageBlockItem>
        </PageBlock>
          <NextProject 
            pageLink="./littlelemon"
            title="Little Lemon"
            image="/projects/littlelemon/styleguide.png"
            altImage="Little Lemon Styleguide"
          />
      </SiteContainer>

  )
}
