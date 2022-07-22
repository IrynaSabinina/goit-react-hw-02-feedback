import React from 'react';
import PropTypes from 'prop-types';
import './Section.css';

export const Section = ({ title }) => {
  return (
    <section className="section">
      <h1 className="title">{title}</h1>
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
