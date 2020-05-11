import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { Layout, SEO } from '../components';

const NotFoundPage = () => (
  <Layout>
    <Container>
      <Row>
        <Col>
          <SEO title="404: Not found" />
          <h1>NOT FOUND</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default NotFoundPage;
