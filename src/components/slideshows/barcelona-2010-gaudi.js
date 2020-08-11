import * as React from 'react'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import classes from './Slideshow.module.css';

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
      <div>
        <Carousel
          showArrows={true}
          showThumbs={false}
        >
          {allFile.edges.map(({ node }) => (
            <div>
              <Img fluid={node.childImageSharp.fluid} />
              <p className="legend">
                {node.childImageSharp.fields.exif.raw.image.ImageDescription}
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}
export default BarcaGaudiSlideShow;
