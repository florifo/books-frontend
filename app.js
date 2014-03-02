require(['bower_components/aura/lib/aura'], function(Aura) {


	var app = new Aura();
  // app.use('aura_extensions/aura-facebook');
  app.use('aura_extensions/aura-login');
  app.use('aura_extensions/aura-utils');

  app.use(function(app) {
    window.App =  app;
  });

  // Aura
  app.start({ widgets: 'body' });

});
