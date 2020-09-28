import React from "react";
import PropTypes from "prop-types";

export default function Section({ title, children }) {
  return (
    <>
      <h3>{title}</h3>
      {children}
    </>
  );
}

Section.defaultProps = {
  title: "",
  children: null,
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array,
};
