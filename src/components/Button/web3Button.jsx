import React from 'react';
import PropTypes from 'prop-types';
import design from './button.module.css';

const Web3Button = ({ content, style, onClick }) => {
  return (
    <button style={style} className={design.btn} onClick={onClick}>
      {content}
    </button>
  );
};

Web3Button.propTypes = {
  content: PropTypes.string.isRequired,
  style: PropTypes.object,
  onClick: PropTypes.func.isRequired,
};

export default Web3Button;
