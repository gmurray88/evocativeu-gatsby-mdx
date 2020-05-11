import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';

import { Footer, Header } from '../';
import classes from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <Container fluid className={classes.baseGrid}>
      <Header />
      <div className={classes.container}>
        <main>{children}</main>
      </div>
      <Footer />
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
