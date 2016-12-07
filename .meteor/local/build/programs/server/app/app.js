var require = meteorInstall({"main.coffee.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// main.coffee.js                                                    //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
if (Meteor.isClient) {                                               // 1
  Template.hello.onCreated(function() {                              //
    return this.counter = new ReactiveVar(0);                        //
  });                                                                //
  Template.hello.helpers({                                           //
    counter: function() {                                            //
      return Template.instance().counter.get();                      //
    }                                                                //
  });                                                                //
  Template.hello.events({                                            //
    'click button': function(event, instance) {                      //
      return instance.counter.set(instance.counter.get() + 1);       //
    }                                                                //
  });                                                                //
}                                                                    //
                                                                     //
///////////////////////////////////////////////////////////////////////

}},{"extensions":[".js",".json",".coffee"]});
require("./main.coffee.js");
//# sourceMappingURL=app.js.map
