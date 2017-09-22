import React from 'react';
import Progress from './ProgressBar/Progress'

const defaultProps = {
  className: 'progress-bar',
  color: 'rainbow',
  percent: 0,
  label: ""
};

export default (props) => {
  props = {
    ...defaultProps,
    ...props
  };

  return (
    <div className={props.className}>
      <Progress percent={props.percent} label={props.label} color={props.color} />
    </div>
  );
};
