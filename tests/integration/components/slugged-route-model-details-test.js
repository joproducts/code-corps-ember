import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('slugged-route-model-details', 'Integration | Component | slugged route model details', {
  integration: true,
  beforeEach() {
    this.register('service:credentials', Ember.Service);
  },
});

test('it renders', function(assert) {
  this.render(hbs`{{slugged-route-model-details}}`);
  assert.equal(this.$('.slugged-route-model-details').length, 1);
});

test('when the slugged route is an organization, it renders the organization component', function(assert) {
  assert.expect(1);

  let sluggedRoute = { ownerType: 'Organization' };

  this.set('sluggedRoute', sluggedRoute);
  this.render(hbs`{{slugged-route-model-details sluggedRoute=sluggedRoute}}`);

  assert.equal(this.$('.organization-profile').length, 1);
});


test('when the slugged route is a user, it renders the user component', function(assert) {
  assert.expect(1);

  let sluggedRoute = { ownerType: 'User' };

  this.set('sluggedRoute', sluggedRoute);
  this.render(hbs`{{slugged-route-model-details sluggedRoute=sluggedRoute}}`);

  assert.equal(this.$('.user-details').length, 1);
});
