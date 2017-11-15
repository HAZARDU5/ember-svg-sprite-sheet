export function initialize(/* container, application */) {
  if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
    Ember.$('head base').remove();
  }
}

export default {
  name: 'detect-firefox',
  initialize: initialize
};
