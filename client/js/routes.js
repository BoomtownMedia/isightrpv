import { FlowRouter } from 'meteor/ostrio:flow-router-extra';


FlowRouter.route('/', {
  name: 'home',
  action() {
    this.render('main');
  }
});

FlowRouter.route('/team', {
  name: 'team',
  action() {
    this.render('team');
  }
});

FlowRouter.route('/gallery', {
  name: 'gallery',
  action() {
    this.render('gallery');
  }
});


FlowRouter.route('/contactus', {
  name: 'contact_us',
  action() {
    this.render('contact_us');
  }
});

FlowRouter.route('/services', {
  name: 'services',
  action() {
    this.render('services');
  }
});
