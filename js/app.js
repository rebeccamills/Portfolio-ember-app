App = Ember.Application.create();

App.Router.map(function() {
  this.route("portfolio");
  this.route("blog");
  this.route("home");
});

App.IndexRoute = Ember.Route.extend({
 
});
