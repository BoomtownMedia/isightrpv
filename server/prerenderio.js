
// Use Prerender with your token
var prerenderio = Npm.require('prerender-node').set('prerenderToken', 'skQUsr8JuN8WAzgV5Y1X');
// Feed it to middleware! (app.use)
WebApp.connectHandlers.use(prerenderio);