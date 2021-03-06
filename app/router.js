import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('addword');
  this.route('wordslist', function() {
    this.route('edit');
  });
  this.route('game');
});

export default Router;
