import Ember from 'ember';
import CanAnimateMixin from 'code-corps-ember/mixins/can-animate';
import { module, test } from 'qunit';

module('Unit | Mixin | can animate');

// Replace this with your real tests.
test('it works', function(assert) {
  let CanAnimateObject = Ember.Object.extend(CanAnimateMixin);
  let subject = CanAnimateObject.create();
  assert.ok(subject);
});
