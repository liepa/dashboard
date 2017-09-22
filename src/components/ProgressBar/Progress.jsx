import React from 'react';
import Label from './Label'

const defaultProps = {
  className: 'progress-bar__progress',
  height: 20,
  hideDelay: .4,
  percent: 0,
  speed: .4,
  label: "",
  style: {}
};

export default (props) => {
  props = {
    ...defaultProps,
    ...props
  };

  let barStyle = {
    textAlign: 'right',
    width: `${props.percent}%`,
    maxWidth: '100% !important',
    height: `${props.height}px`,
    boxShadow: '1px 1px 1px rgba(0,0,0,0.4)',
    WebkitTransition: `${props.speed}s width, ${props.speed}s background-color`,
    transition: `${props.speed}s width, ${props.speed}s background-color`,
    ...props.style
  };

  if (props.color === 'rainbow') {
    barStyle.backgroundImage = props.style.backgroundImage || 'linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #FF2D55)';
    barStyle.backgroundSize = props.style.backgroundSize || `100vw ${props.height}px`;
  } else {
    barStyle.backgroundColor = props.style.backgroundColor || props.color;
  }

  return (
    <span className={props.className} style={barStyle}>
      <Label text={props.label} />
    </span>
  );
};
