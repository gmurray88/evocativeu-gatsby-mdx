import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import classes from './Header.module.css';

const Header = ({ siteTitle }) => (
  <div className={classes.background}>
    <Container className={classes.container}>
      <Row>
        <Col>
          <header className={classes.header}>
            <h1 className={classes.title}>
              <Link to="/">
                <img
                  className={`img-responsive ${classes.headerImage}`}
                  src="/img/EvocativeULogo.png"
                  alt="EvocativeU"
                />
              </Link>
            </h1>
            <nav className={classes.navbar}>
              <Link to="/blog" className={classes.link}>
                Blog
              </Link>
              <Link to="/community" className={classes.link}>
                Art Playlists
              </Link>
            </nav>
          </header>
        </Col>
      </Row>
    </Container>
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
