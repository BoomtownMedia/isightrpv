import { ReactiveVar } from 'meteor/reactive-var';


Template.contact_us.events({


  // jquery contact form find data itmems

  'submit #contact-form': function (event) {
    event.preventDefault();
    var element = $(event.target);
    var name = element.find("#name").val();
    var email = element.find("#email").val();
    var phone = element.find("#phone").val();
    var message = element.find("#message").val();

    //create object to pass to serve methods
    var subForm = {
      name: name,
      email: email,
      phone: phone,
      message: message,
    };

    // call meteor to send email from input
    Meteor.call('sendEmail', subForm);
    Router.go("/contact");
  },

});



Template.gallery.onRendered(function () {
  var self = this
  self.selection =
    this.$('.grid').isotope({
      //options....
      itemSelector: '.grid-item',
      filter: "*",
      masonry: {
        columnWidth: 300
      }
    });

  self.selection.imagesLoaded(function () {
    self.selection.isotope('layout');
  });

});

Meteor.startup(function () {
  new WOW().init();


  // Show the example modal 3 seconds after startup.
  // setTimeout(function () {
  //   Modal.show('modal1')
  // }, 3000)

  Template.nav.events({

    'click .nav a': function () {
      $('.navbar-toggle').click();
    }
  });

  Template.main.events({
    'click .nav a': function () {
      $('.navbar-toggle').click();
    },




  });

  //isotope events
  Template.gallery.events({
    'click button.filter-ag': function () {

      Template.instance().selection.isotope({ filter: '.ag' });
    },

    'click button.filter-construction': function () {

      Template.instance().selection.isotope({ filter: '.construction' });
    },

    'click button.filter-infra': function () {

      Template.instance().selection.isotope({ filter: '.infra' });
    },

    'click button.filter-all': function () {

      Template.instance().selection.isotope({ filter: '*' });
    }
  });
});

//facebook feed
Template.footer.onCreated(function () {
  this.feed = new ReactiveVar();

  var link = "https://graph.facebook.com/v2.11/isightrpv?fields=posts.limit(3)"
  var arguments = {
    headers: { "User-Agent": "Meteor/1.1" },
    params: {
      "access_token": "956271767862418|2XmW6Fr58RZKChHtB8m20AhOSJ8",
    }
  };
  Meteor.http.call('GET', link, arguments, function (error, response) {
    this.feed.set(response.data);
  }.bind(this));
});

Template.footer.helpers({
  feed1: function () {
    return Template.instance().feed.get().posts.data[0].message;
  },
  feed2: function () {
    return Template.instance().feed.get().posts.data[1].message;
  }
});

Meteor.setInterval(function () {
  HTTP.get("http://isightrpv.herokuapp.com");
}, 300000);


//modal

//megamenu
