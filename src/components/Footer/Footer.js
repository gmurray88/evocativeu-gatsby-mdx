import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Link } from 'gatsby';

import { OutboundLink } from 'gatsby-plugin-google-analytics';

import classes from './Footer.module.css';

import { GitHubIcon, TwitterIcon, RssIcon } from '../icons';

const Footer = () => (
  <footer className={classes.footer}>
    <Container>
      <Row>
        <Col lg={2}>
          <div className={classes.subtitle}>Contents</div>
          <ul className={classes.linkList}>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/community">Art Playlists</Link>
            </li>
          </ul>
        </Col>
        <Col lg={3}>
          <div className={classes.subtitle}>Find us online</div>
          <ul className={classes.linkList}>
            <li>
              <GitHubIcon />{' '}
              <OutboundLink
                href="https://github.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                GitHub
              </OutboundLink>
            </li>

          </ul>
        </Col>
        <Col lg={{ span: 3, offset: 3 }}>
          <div className={classes.subtitle}>
            Made with{' '}
            <span role="img" aria-label="love">
              ❤️
            </span>
          </div>
          <ul className={classes.linkList}>
            <li>
              © {new Date().getFullYear()}
              {` EvocativeU`}
            </li>
            <li>
              {`Built with`}
              &nbsp;
              <OutboundLink
                href="https://www.gatsbyjs.org"
                target="_blank"
                rel="noreferrer noopener"
              >
                Gatsby
              </OutboundLink>
            </li>
            <li>
              <OutboundLink
                href="https://www.netlify.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  alt="Deploys by netlify"
                  src="https://www.netlify.com/img/global/badges/netlify-light.svg"
                />
              </OutboundLink>
            </li>

          </ul>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
