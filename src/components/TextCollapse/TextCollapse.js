
import React from 'react';
import ReactTextCollapse from 'react-text-collapse';
import { useStaticQuery, graphql } from 'gatsby';

const TextCollapse = ({ src }) => {

    const TEXT_COLLAPSE_OPTIONS = {
        collapse: false,
        collapseText: '... show more',
        expandText: 'show less',
        minHeight: 70,
        maxHeight: 180,
        textStyle: {
            color: 'black',
            fontSize: '20px'
        }
    };

    const { allImageSharp } = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            fields {
              exif {
                raw {
                  image {
                    ImageDescription
                  }
                }
              }
            }
            fluid {
               originalName
            }
          }
        }
      }
    }
  `);
    const image = allImageSharp.edges.find(
        edge => edge.node.fluid.originalName === src
    );
    console.log(`desc is   ${image.node.fields.exif.raw.image.ImageDescription}`)
    const desc = image.node.fields.exif.raw.image.ImageDescription;
    return (
        <div>
            <ReactTextCollapse options={TEXT_COLLAPSE_OPTIONS}>
                <p>
                    {desc}
                </p>
            </ReactTextCollapse>
        </div>

    );
};

export default TextCollapse;

