import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import moment from 'moment';
import Img from 'gatsby-image/withIEPolyfill';

import slugify from '../../utils/slugify';
import classes from './AuthorDisplay.module.css';

const AuthorDisplay = ({ authorImage, name, date, readTimeInMinutes }) => {
  // const author = useStaticQuery(graphql(``));

  const readTimeDisplay = readTimeInMinutes && (
    <span className={classes.readingTime}>{readTimeInMinutes} min read</span>
  );

  const dateDisplay = date && (
    <span className={classes.date}>
      {moment(new Date(date)).format('MMM D YYYY')}
    </span>
  );

  const authorUrl = `/author/${slugify(name)}`;

  return (
    <div className={classes.container}>
      {authorImage && (
        <Link to={authorUrl}>
          <Img fluid={authorImage} className={classes.authorImage} />
        </Link>
      )}
      <div className={classes.metadataContainer}>
        <Link to={authorUrl} className={classes.authorName}>
          {name}
        </Link>
        <div>
          {dateDisplay}
          {date && readTimeDisplay && ` · `}
          {readTimeDisplay}
        </div>
      </div>
    </div>
  );
};

AuthorDisplay.propTypes = {
  authorImage: PropTypes.shape({}),
  name: PropTypes.string,
  date: PropTypes.string,
  readTimeInMinutes: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default AuthorDisplay;
