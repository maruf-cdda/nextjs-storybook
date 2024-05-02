import React from "react";
import PropTypes from "prop-types";

const Header = ({ title }: { title: string }) => {
  return <h1>{title}</h1>;
};

export default Header;

Header.propTypes = {
  title: PropTypes.string,
};
