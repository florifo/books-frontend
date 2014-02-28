var page = require('webpage').create();
page.open('http://books-backend.herokuapp.com/', function() {
  page.render('example.png');
  phantom.exit();
});
