import React from 'react';
import PropTypes from 'prop-types';
import styles from './Notification.modules.css';

export const Notification = ({ message, total }) => {
  return !total ? <p className="notification">{message}</p> : ' ';
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  total: PropTypes.number,
};
