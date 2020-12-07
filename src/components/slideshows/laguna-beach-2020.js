import * as React from 'react'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import '../../styles/carousel.css';


const LagunaBeach2020SlideShow = () => {
  const { allFile } = useStaticQuery(
    graphql`
    query {
        allFile(
            filter: {relativeDirectory: {eq: "slideshows/laguna-beach-2020"}}
            sort: {fields: name, order: ASC}
            ) {
              edges {
                node {
                  id
                  name
                  childImageSharp {
                    
                    fields {
                      exif {
                        raw {
                        image {
                          ImageDescription
                        }
                       }
                     }
                    }
                    fluid(maxWidth: 2048) {
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
    <div>
      <Carousel
        showArrows={true}
        showThumbs={false}
      >
        {allFile.edges.map(({ node }) => (
          <div>
            <Img style={{ marginLeft: "auto", marginRight: "auto", maxHeight: "80vh", maxWidth: `calc(80vh * ${node.childImageSharp.fluid.aspectRatio})` }}
              fluid={node.childImageSharp.fluid} />
            <p>
              {node.childImageSharp.fields.exif.raw.image.ImageDescription}
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  )
}
export default LagunaBeach2020SlideShow;

