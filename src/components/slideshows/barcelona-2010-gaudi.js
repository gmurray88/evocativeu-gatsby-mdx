import * as React from 'react'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import '../../styles/carousel.css';



const BarcaGaudiSlideShow = () => {
  const { allFile } = useStaticQuery(
    graphql`
    query {
        allFile(
            filter: {relativeDirectory: {eq: "slideshows/barcelona-2010-gaudi"}}
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
        showArrows={false}
        showThumbs={false}
      >
        {allFile.edges.map(({ node }) => (
          <div>
            <Img fluid={node.childImageSharp.fluid} />
            <p className="legend2">
              {node.childImageSharp.fields.exif.raw.image.ImageDescription}
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  )
}
export default BarcaGaudiSlideShow;
