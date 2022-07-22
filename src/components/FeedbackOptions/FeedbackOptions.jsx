import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.modules.css';

export const FeedbackOptions = ({
  onGood,
  onNeutral,
  onBad,
  //   onLeaveFeedback,
}) => {
  return (
    <div>
      <button type="button" style={{ background: 'green' }} onClick={onGood}>
        Good
      </button>
      <button
        type="button"
        style={{ background: 'yellow' }}
        onClick={onNeutral}
      >
        Neutral
      </button>
      <button type="button" style={{ background: 'red' }} onClick={onBad}>
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  onGood: PropTypes.func.isRequired,
  onNeutral: PropTypes.func.isRequired,
  onBad: PropTypes.func.isRequired,
  //   onLeaveFeedback: PropTypes.bool.isRequired,
};
