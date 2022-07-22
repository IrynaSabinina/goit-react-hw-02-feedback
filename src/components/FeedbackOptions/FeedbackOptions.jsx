import React from 'react';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({
  onGood,
  onNeutral,
  onBad,
  onLeaveFeedback,
}) => {
  return (
    <div>
      <button type="button" onClick={onGood}>
        Good
      </button>
      <button type="button" onClick={onNeutral}>
        Neutral
      </button>
      <button type="button" onClick={onBad}>
        Bad
      </button>
    </div>
  );
};

// FeedbackOptions.propTypes = {
//   options: PropTypes.number.isRequired,
//   onLeaveFeedback: PropTypes.bool.isRequired,
// };
