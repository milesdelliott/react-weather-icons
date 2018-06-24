import React from 'react';
import PropTypes from 'prop-types';
import './css/weather-icons.css';
import helper from './utils';
/**
* @param {string} name the name of weather api (open weather map, yahoo and dark sky)
* @param {string} iconId Id based on weather condition
* @param {string} flip
* @param {string} fixedWidth
* @param {string} rotate
* @module WeatherIcon
* @type {ReactClass}
**/


const WeatherIcon = (props) => {
  var icon;
  var { name, night, className, rotate, fixedWidth, iconId, flip, ...other } = props;
  icon = helper.convertCode(name, iconId, night);
  icon += flip ? ' wi-flip-' + flip : '';
  icon += rotate ? ' wi-rotate-' + rotate : '';
  icon += fixedWidth ? ' wi-fw' : '';
  icon += className ? ' ' + className : '';
  return (
    <i {...other} name={name} className={icon} />
  );
};

WeatherIcon.propTypes = {
  name: PropTypes.oneOf(['owm', 'darksky', 'yahoo']).isRequired,
  className: PropTypes.string,
  iconId: PropTypes.string.isRequired,
  flip: PropTypes.oneOf(['horizontal', 'vertical']),
  fixedWidth: PropTypes.bool,
  rotate: PropTypes.oneOf(['90', '180', '270'])
};
export default WeatherIcon;
