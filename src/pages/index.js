import React from 'react';
import { graphql } from 'gatsby';

// boostrap stuff
import { Col, Container, Row } from 'react-bootstrap';


import { Image, Layout, SEO } from '../components';


import classes from './Home.module.css';

class IndexPage extends React.Component {
  render() {

    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

        <Container className={classes.about}>

          <Row>
            <Col xl={{ span: 8, offset: 2 }}>
              <h2>ee-vok'-uh-tiv</h2>
              <p>
                Bringing strong images, memories, or feelings to mind
            </p>
              <p>
                Art For Art's Sake
            </p>
            </Col>
          </Row>
          <Row>
            <Col xl={{ span: 8, offset: 2 }}>

              <Image src="SohoNeon.jpg" alt="Soho Neon" />
            </Col>
          </Row>

        </Container>

      </Layout>
    )
  }
}

export default IndexPage;
