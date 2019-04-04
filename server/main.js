import { Meteor } from 'meteor/meteor';
Meteor.startup(() => {

  // code to run on server at startup
  smtp = {
    username: 'boomtownm@gmail.com',
    password: 'yr4boomtown',
    server: 'smtp.gmail.com',
    port: 587
}
  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;

});

if(Meteor.isServer) {
  Meteor.methods({
    sendEmail(subForm){
    //let other method calls from the same client start running

    Email.send({
      to: "info@isightrpv.com",
      name: subForm.name,
      from: subForm.email,
      subject:subForm.name + " has contacted you",
      message:subForm.message,
      text: "name: " + subForm.name + '\n' +
            "phone: " + subForm.phone + '\n' +
            "email: " + subForm.email + '\n' +
            subForm.message,

    });
    }
  });
};
WebApp.connectHandlers
  .use('/redir/', function(req, res, next) {
    // 301 Moved Permanently
    res.writeHead(301, {
      'Location': 'https://www.isightrpv..com' + req.originalUrl
    });
    res.end();
  });
// Meteor.methods({
// //facebook feed
// FacebookFeed: function() {
// var link = "https://graph.facebook.com/v2.11/isightrpv?fields=posts.limit(3)"
// var arguments = {
//   headers: {"User-Agent": "Meteor/1.1"},
//   params: {
//     "access_token": "956271767862418|2XmW6Fr58RZKChHtB8m20AhOSJ8",
//   }
// };
// HTTP.call('GET',link,arguments,function(error,response){
//   var feed1 = response.data.posts.data[0].message;
//   return feed1;
// });
// }
// });
