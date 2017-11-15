import Ember from 'ember';
import layout from 'ember-svg-sprite-sheet/templates/components/svg-sprite';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'svg',
  classNames: ['svg-sprite'],
  classNameBindings: ['class']
});
