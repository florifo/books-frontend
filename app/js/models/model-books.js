/**
* @title: Books model
* @author: Jairo Gätjens
* @created-date: 01-20-2014
* @email: jgatjens@gmail.com
*/

'use strict';

// Constructor pattern
function Books( url, data) {
  this.type = 'model';
  this.url = url || 'books';
  this.data = data || {};
}

// create fetch prototype method
Books.prototype.fetch = function(cb) {

	// the 'this' keyword refers to the object instance
  var _self = this;

  var request = new XMLHttpRequest;

  request.open('GET', App.conf.rootUrl + this.url, true);
  request.send();

  request.onload = function() {
      var data = JSON.parse(this.response);
      _self.data = data;
      if (cb) cb(); // call callback with data

  };

  request.onerror = function() {
      if (cb) cb({ success: false });
  };

  // Jquery GET XHR promise sintax
 //   $.get(App.conf.rootUrl + this.url  , function( data ) {
	// 	// console.log('xhr request send it successfully');
	// }).done(function(data) {

 //      // save data to the object instace
 //  		_self.data = data;
 //  		if (cb) cb(data); // call callback with data

	// }).fail(function(err) {
 //   		if (cb) cb(err);
	// });
};

// create get prototype method
Books.prototype.get = function(id) {};
// create edit prototype method
Books.prototype.edit = function(id, put) {};
// create delete prototype method
Books.prototype.delete = function(id) {};

// save Books class to App.models namespace
App.models.Books = Books;
