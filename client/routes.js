Router.route('/', function() {
  this.render('main');
  event.preventDefault();
});

Router.route('/contact', function(){
  this.render('contact');
});
