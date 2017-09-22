import React from 'react';
import ReactDOM from 'react-dom';
import ProgressBar from './components/ProgressBar';

module.exports = function(options = {}) {
  var targetId = options["targetId"] || 'progress-bar'

  this.state = {
    percent: options['percent'] || 0,
    label: options['label'] || ""
  };

  ReactDOM.render(
    <ProgressBar percent={this.state.percent} label={this.state.label} />,
    document.getElementById(targetId)
  );
};
