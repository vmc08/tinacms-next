import { GetStaticProps } from 'next'
import ErrorPage from 'next/error'
import { staticRequest } from 'tinacms'
import { useTina } from 'tinacms/dist/edit-state'
import { Query } from '../../.tina/__generated__/types'

import Navigation from '@blocks/Navigation'
import { HeroV1, HeroV2, HeroV3 } from '@blocks/Hero'
import { FeaturesV1 } from '@blocks/Features'
import Projects from '@blocks/Projects'
import Vision from '@blocks/Vision'
import Values from '@blocks/Values'
import Footer from '@blocks/Footer'

const query = `
  query {
    getPagesDocument(relativePath: "home.md") {
      data {
        blocks {
          __typename
          ... on PagesBlocksNavigation {
            alignment
            menuItems {
              label
              link
              subMenuItems {
                label
                link
              }
            }
            rightMenuItems {
              label
              link
              variant
            }
          }
          ...on PagesBlocksHeroV1 {
            title
            description
            background
            form {
              placeholder
              button {
                link
                label
                variant
              }
            }
          }
          ... on PagesBlocksHeroV2 {
            title
            description
            background
            button {
              label
              link
            }
          }
          ...on PagesBlocksHeroV3 {
            title
            description
            background
            actionButtons {
              link
              label
              variant
            }
          }
          ... on PagesBlocksProjects {
            projectItem {
              link
              image
            }
          }
          ... on PagesBlocksVision {
            title
            description
          }
          ... on PagesBlocksValues {
            title
            valueItems {
              image
              description
            }
          }
          ... on PagesBlocksFooter {
            menuItems {
              label
              link
            }
          }
          ...on PagesBlocksFeaturesV1 {
            title
            subtitle
            description
            features {
              imageIcon
              title
              description
            }
          }
        }
      }
    }
  }
`

export const getStaticProps: GetStaticProps = async () => {
  let data: unknown = {}
  try {
    data = await staticRequest({
      query,
    })
  } catch {}

  return {
    props: {
      data,
    },
  }
}

const Index: React.FC<{ data: Query }> = (props) => {
  const { data } = useTina({
    query,
    data: props.data,
    variables: {},
  })
  return data?.getPagesDocument ? (
    <>
      {(data.getPagesDocument.data.blocks || []).map((block, idx) => {
        switch (block?.__typename) {
          case 'PagesBlocksNavigation':
            return <Navigation key={idx} {...block} />
          case 'PagesBlocksHeroV1':
            return <HeroV1 key={idx} {...block} />
          case 'PagesBlocksHeroV2':
            return <HeroV2 key={idx} {...block} />
          case 'PagesBlocksHeroV3':
            return <HeroV3 key={idx} {...block} />
          case 'PagesBlocksProjects':
            return <Projects key={idx} {...block} />
          case 'PagesBlocksVision':
            return <Vision key={idx} {...block} />
          case 'PagesBlocksValues':
            return <Values key={idx} {...block} />
          case 'PagesBlocksFooter':
            return <Footer key={idx} {...block} />
          case 'PagesBlocksFeaturesV1':
            return <FeaturesV1 key={idx} {...block} />
          default:
            return null
        }
      })}
    </>
  ) : (
    <ErrorPage statusCode={404} />
  )
}

export default Index
