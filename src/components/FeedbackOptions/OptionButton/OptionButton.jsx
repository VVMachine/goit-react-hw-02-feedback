import React from "react";
import PropTypes from "prop-types";

export default function OptionButton({ option, onLeaveFeedback }) {
  return (
    <button type={option} name={option} onClick={onLeaveFeedback}>
      {option}
    </button>
  );
}

OptionButton.defaultProps = {
  option: "Default Option Name",
  onLeaveFeedback: () => {
    return;
  },
};

OptionButton.propTypes = {
  option: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
