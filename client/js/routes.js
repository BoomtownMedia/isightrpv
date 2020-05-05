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

FlowRouter.route('/flightpros', {
    name: 'flightpros',
    action() {
        this.render('flightpros');
    }
});

FlowRouter.route('/services/agriculture', {
  name: 'agriculture',
  action() {
    this.render('agriculture');
  }
});

FlowRouter.route('/services/construction', {
  name: 'construction',
  action() {
    this.render('construction');
  }
});

FlowRouter.route('/services/infrastructure', {
  name: 'infrastructure',
  action() {
    this.render('infrastructure');
  }
});

FlowRouter.route('/services', {
  name: 'services',
  action() {
    this.render('agriculture');
  }
})