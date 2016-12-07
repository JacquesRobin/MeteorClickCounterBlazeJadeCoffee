var require = meteorInstall({"client":{"template.main.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// client/template.main.js                                                                             //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
                                                                                                       // 1
Template.body.addContent((function() {                                                                 // 2
  var view = this;                                                                                     // 3
  return [ HTML.Raw("<h1>Welcome to Meteor!</h1>"), Spacebars.include(view.lookupTemplate("hello")) ];
}));                                                                                                   // 5
Meteor.startup(Template.body.renderToDocument);                                                        // 6
                                                                                                       // 7
Template.__checkName("hello");                                                                         // 8
Template["hello"] = new Template("Template.hello", (function() {                                       // 9
  var view = this;                                                                                     // 10
  return [ HTML.Raw("<button>Click on me!</button>"), HTML.P("You've clicked on the button ", Blaze.View("lookup:counter", function() {
    return Spacebars.mustache(view.lookup("counter"));                                                 // 12
  }), " times") ];                                                                                     // 13
}));                                                                                                   // 14
                                                                                                       // 15
/////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.coffee.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// client/main.coffee.js                                                                               //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Template.hello.onCreated(function() {                                                                  // 1
  return this.counter = new ReactiveVar(0);                                                            //
});                                                                                                    // 1
                                                                                                       //
Template.hello.helpers({                                                                               // 4
  counter: function() {                                                                                //
    return Template.instance().counter.get();                                                          //
  }                                                                                                    //
});                                                                                                    //
                                                                                                       //
Template.hello.events({                                                                                // 7
  'click button': function(event, instance) {                                                          //
    return instance.counter.set(instance.counter.get() + 1);                                           //
  }                                                                                                    //
});                                                                                                    //
                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{"extensions":[".js",".json",".jade",".coffee"]});
require("./client/template.main.js");
require("./client/main.coffee.js");