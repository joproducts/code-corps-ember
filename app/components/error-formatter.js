import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['error-formatter'],
  defaultMessage: 'An unexpected error has occured',

  messages: Ember.computed('error.errors', function() {
    return (this.get('error.errors') || []).map((e) => {
      return `${e.title}: ${e.detail}`;
    });
  }),
});
