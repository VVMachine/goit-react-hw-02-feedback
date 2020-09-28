import React from "react";
import PropTypes from "prop-types";

import OptionButton from "./OptionButton/OptionButton";

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className="feedbackOptions">
      {options.map((option, idx) => {
        return (
          <OptionButton
            option={option}
            onLeaveFeedback={onLeaveFeedback}
            key={idx}
          />
        );
      })}
    </div>
  );
}

FeedbackOptions.defaultProps = {
  options: [],
  onLeaveFeedback: () => {
    return;
  },
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
