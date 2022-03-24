import { GetStaticProps } from 'next'
import ErrorPage from 'next/error'
import { staticRequest } from 'tinacms'
import { useTina } from 'tinacms/dist/edit-state'
import { Query } from '../../.tina/__generated__/types'

import Navigation from '@blocks/Navigation'
import HeroBanner from '@blocks/Hero'
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
          ... on PagesBlocksHero {
            title
            description
            image
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
        const dynamicKey = `${block?.__typename}-${idx}`
        switch (block?.__typename) {
          case 'PagesBlocksNavigation':
            return <Navigation key={dynamicKey} {...block} />
          case 'PagesBlocksHero':
            return <HeroBanner key={dynamicKey} {...block} />
          case 'PagesBlocksProjects':
            return <Projects key={dynamicKey} {...block} />
          case 'PagesBlocksVision':
            return <Vision key={dynamicKey} {...block} />
          case 'PagesBlocksValues':
            return <Values key={dynamicKey} {...block} />
          case 'PagesBlocksFooter':
            return <Footer key={dynamicKey} {...block} />
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
