import * as React from 'react'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

const SlideShow = () => {
  const { allFile } = useStaticQuery(
    graphql`
    query {
        allFile(
            filter: {relativeDirectory: {eq: "slideshows/american-utopia-sac"}}
            ) {
              edges {
                node {
                  id
                  name
                  childImageSharp {
                    fluid(maxWidth: 1024) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
          `,
  )
  return (
    <div >
      <Carousel
        showArrows={true}
        showThumbs={false}
      >
        {allFile.edges.map(({ node }) => (
          <Img fluid={node.childImageSharp.fluid} />
        ))}
      </Carousel>
    </div>
  )
}
export default SlideShow;
