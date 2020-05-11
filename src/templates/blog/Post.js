import React from 'react';
import PropTypes from 'prop-types';
import { Location } from '@reach/router';

import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Container, Col, Row } from 'react-bootstrap';

import {
  AuthorDisplay,
  Colophon,
  CoverImage,
  Layout,
  SEO,
} from '../../components';
import classes from './Post.module.css';

const Post = ({ data, pageContext }) => {
  const { post, coverImageUrl } = data;

  const { coverImage, title, subtitle, author, date } = post.frontmatter;

  return (
    <Location>
      {({ location }) => {
        // get the base URL for this page from reach router, or fall back to
        // netlify provided URLs if that's missing
        // see docs for more info: https://www.netlify.com/docs/continuous-deployment/#environment-variables
        // or fall way the heck back to a hardcoded value
        const siteURLBase =
          location.origin ||
          process.env.DEPLOY_PRIME_URL ||
          process.env.DEPLOY_URL ||
          process.env.URL ||
          'https://apisyouwonthate.com';

        return (
          <Layout>
            <SEO
              title={title}
              description={subtitle}
              ogType="article"
              imageUrl={
                coverImageUrl
                  ? `${siteURLBase}${coverImageUrl.fixed.src}`
                  : null
              }
            />
            {coverImage && (
              <Container fluid className={classes.coverImageContainer}>
                <Row noGutters>
                  <Col>
                    <CoverImage
                      src={coverImage}
                      className={classes.coverImage}
                    />
                  </Col>
                </Row>
              </Container>
            )}
            <Container className={classes.post}>
              <Row>
                <Col
                  lg={{
                    span: 10,
                    offset: 1,
                  }}
                  xl={{
                    span: 8,
                    offset: 2,
                  }}
                >
                  <div className={classes.metadata}>
                    <h2 className={classes.postTitle}>
                      {post.frontmatter.title}
                    </h2>
                    <AuthorDisplay
                      name={author}
                      date={date}
                      readTimeInMinutes={post.timeToRead}
                    />
                  </div>
                  <MDXRenderer>{post.body}</MDXRenderer>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Colophon />
                </Col>
              </Row>
            </Container>
          </Layout>
        );
      }}
    </Location>
  );
};

Post.propTypes = {
  data: PropTypes.shape({}),
  pageContext: PropTypes.shape({}),
};

export const query = graphql`
  query($id: String!, $coverImage: String) {
    post: mdx(id: { eq: $id }) {
      id
      body
      timeToRead
      frontmatter {
        title
        subtitle
        author
        date
        coverImage
      }
    }
    coverImageUrl: imageSharp(fixed: { originalName: { eq: $coverImage } }) {
      fixed(width: 1200) {
        src
      }
    }
  }
`;

export default Post;
