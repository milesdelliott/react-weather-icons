import { owmIcons, yahooIcons, darkSkyIcons } from './maps';


var helper = (function() {
  var convertDarkSkyCode = function(id) {
    if(darkSkyIcons[id]) {
      return darkSkyIcons[id].icon;
    }
    throw new Error('ID passed to component invalid');
  };
  var convertYahooCode = function(id) {
    if(yahooIcons[id]) {
      return yahooIcons[id].icon;
    }
    throw new Error('ID passed to component invalid');
  };
  // openweather
  var convertOWMCode = function(id, night) {
    if(owmIcons[id]) {
      let prefix = 'wi wi-';
      let icon = owmIcons[id].icon;
      // If we are not in the ranges mentioned above, add a day/night prefix.
      if (!(id > 699 && id < 800) && !(id > 899 && id < 1000)) {
        icon = ( night && icon === 'sunny') ? 'clear' : icon;
        icon = (night ? 'night-' : 'day-') + icon;
      }

      icon = prefix + icon;
      return icon;
    }
    throw new Error('ID passed to component invalid');
  };

  var convertCode = function(name, id, night) {
    switch(name) {
      case 'owm':
        return convertOWMCode(id, night);
      case 'darksky':
        return convertDarkSkyCode(id, night);
      case 'yahoo':
        return convertYahooCode(id, night);
      default:
        throw new Error('Name passed to component invalid');
    }
  };
  return {
    convertCode: convertCode
  };
})();

export default helper;
