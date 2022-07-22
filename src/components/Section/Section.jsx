import React from 'react';
import PropTypes from 'prop-types';
import styles from './Section.modules.css';

export const Section = ({ children, title }) => {
  return (
    <section>
      <h1 className="title">{title}</h1>
      {children}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};
