import React from 'react';

const defaultProps = {
  className: 'progress-bar__label',
  lineHeight: 20,
  text: ""
};

export default (props) => {
  props = {
    ...defaultProps,
    ...props
  };

  let labelStyle = {
    lineHeight: "${props.lineHeight}px"
  }

  return (
    <span className={props.className} style={labelStyle}>{props.text}</span>
  );
};
