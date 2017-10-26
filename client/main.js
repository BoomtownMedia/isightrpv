Template.main.events({


// jquery contact form find data itmems

    'submit #contact-form': function(event){
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


Meteor.startup(function() {
  $("body").prognroll({
});
});
