import React from "react";
import PropTypes from "prop-types";

export default function Statistics(props) {
  const { good, neutral, bad, total, positivePercentage } = props;

  return (
    <div className="feedback">
      <span>Statistics</span>
      <p className="good">Good: {good}</p>
      <p className="neutral">Neutral: {neutral}</p>
      <p className="bad">Bad: {bad}</p>
      <p className="total">Total: {total}</p>
      <p className="positive">Positive feedback: {positivePercentage}%</p>
    </div>
  );
}

Statistics.defaultProps = {
  good: 0,
  neutral: 0,
  bad: 0,
  total: 0,
  positivePercentage: 0,
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
