import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import { Image, Layout } from '../../components';
import classes from './CommunityPage.module.css';

const CommunityPage = () => (
  <Layout>
    <div className={classes.container}>
      <Container>
        <div className={classes.slack}>
          <Row>
            <Col>
              <h1>Art Playlists</h1>
              <p>
                Create your own playlists of paintings from throughout the internet.
                Organize playlists by artists or themes. Choose from pre-compiled
                playlists. Share your playlists with others.
            </p>
              <p>
                View your playlists in virtual reality. Make your own museums.
                Bring every Picasso, Van Gogh or Caravaggio into a single exhibition hall.
            </p>


              <Image src="ArtComposite.png" alt="Art Playlists" />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  </Layout>
);

export default CommunityPage;
