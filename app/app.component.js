/* AppComponent = name of the visual component this is creating
 * component = ng.core.Component(...).Class(...);
 * ng.core = global Angular core namespace
 *
 * ng.core.Component(...) = this method takes a configuration object with 3 properties
 * .Class(...) = this method is where we implement the component with properties + mehtods to bind with view
 * 
 */ 

(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: '<h1>Hello Angular 2 -luis</h1>'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));

