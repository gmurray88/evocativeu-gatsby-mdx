import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export const CoverImage = ({ src, alt, ...rest }) => {
  const { allImageSharp } = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            fluid(maxWidth: 1600) {
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
  return <Img objectFit="cover" fluid={image.node.fluid} alt={alt} {...rest} />;
};

CoverImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default CoverImage;
