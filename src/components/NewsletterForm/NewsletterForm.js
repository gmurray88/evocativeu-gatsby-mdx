import React from 'react';
import { Link } from 'gatsby';

// boostrap stuff
import { Col, Form, Row } from 'react-bootstrap';

import classes from './NewsletterForm.module.css';

const NewsletterForm = () => {
  return (
    <React.Fragment>
      <h6>Get Pragmatic API, HTTP And REST Info Monthly!</h6>
      <Form
        inline
        method="post"
        noValidate
        target="_blank"
        action={`https://apisyouwonthate.us10.list-manage.com/subscribe/post?u=f5c5ff66d95d11dec1b88cf54&amp;id=532b212b06`}
      >
        <Form.Group
          controlId="exampleForm.ControlInput1"
          className={classes.group}
        >
          <Form.Control
            type="email"
            name="email"
            placeholder="name@example.com"
            className={classes.email}
          />
          <input type="submit" value="Submit" className={classes.button} />
        </Form.Group>
      </Form>
      <div className={classes.description}>
        <Row>
          <Col>
            Not into mailing lists? Get all modern with Slack. We're the largest
            API-centric{' '}
            <Link className={classes.link} to="/community">
              Slack channel
            </Link>{' '}
            around. Get your API, REST and HTTP questions answered by 2,000+
            people.
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default NewsletterForm;
