define({
  require: {
    paths: {
      oauth:  'bower_components/oauth.io/oauth'
    },
    shim:   { oauth: { exports: 'OAuth' } }
  },
  initialize: function(app) {
    //... do stuff now ...

    // var OAuth = require('oauth');

    OAuth.initialize('uU06i9uOfaj8SLv2qkCVrdMFlCA');

    OAuth.callback('github', function(err, result) {

      var access_token = result.access_token,
          token_type = result.token_type;  


      result.get('/user').done(function(data) {

        window.localStorage.setItem("github", JSON.stringify(data));  
        // app.sandbox.data.user = data;
      });
    });


    app.sandbox.login = function(provider) {
       
      var user = JSON.parse(localStorage.getItem(provider));
        
      if (!user.login)
        OAuth.redirect('github', "/");

    };



    // app.sandbox.github.logout = function() {
      // OAuth.redirect('github', "/");
    // };

    app.sandbox.isLoggedIn = function() {
      var user = JSON.parse(localStorage.getItem(provider));  
      return !!user.login;
    }

  }
});