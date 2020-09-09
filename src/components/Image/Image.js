import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import classes from './Image.module.css';

const Image = ({ src, ...rest }) => {

  const { allImageSharp } = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            fluid(maxWidth: 2048) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
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
  if (!image) {
    return null;
  }

  return (
    <div className={classes.container}>
      <Img style={{ marginLeft: "auto", marginRight: "auto", maxHeight: "80vh", maxWidth: `calc(80vh * ${image.node.fluid.aspectRatio})` }}
        fluid={image.node.fluid} alt={src}  {...rest} />

    </div>
  )
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,

};

export default Image;
