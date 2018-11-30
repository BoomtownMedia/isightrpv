Router.route('/', function() {
  this.render('main');
});

Router.route('/contact', function(){
  this.render('contact');
});

Router.route('/team', function(){
  this.render('team');
});

Router.route('services', function() {
  this.render('services');
});
Router.route('contactus', function() {
  this.render('contact_us');
});

Router.route('gallery', function() {
  this.render('gallery');
});
