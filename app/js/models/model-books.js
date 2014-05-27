/**
* @title: Books model
* @author: Jairo Gätjens
* @created-date: 01-20-2014
* @email: jgatjens@gmail.com
*/
(function(){

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
        if (cb) cb(data); // call callback with data

    };

    request.onerror = function() {
        if (cb) cb({ success: false });
    };
  };

  // create get prototype method
   // create get prototype method
  Books.prototype.get = function(id, cb) {

    // the 'this' keyword refers to the object instance
    var _self = this;

    var request = new XMLHttpRequest;

    request.open('GET', App.conf.rootUrl + this.url + '/' + id, true);
    request.send();

    request.onload = function() {
        var data = JSON.parse(this.response);
        _self.data = data;
        if (cb) cb(data); // call callback with data
    };

    request.onerror = function() {
        if (cb) cb({ success: false });
    };

  };

  // create edit prototype method
  Books.prototype.edit = function(id, book, cb) {

    var _self = this;

    var request = new XMLHttpRequest;

    // var json_data = new FormData(book);

    request.open('PUT', App.conf.rootUrl + this.url + '/' + id, true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(book);

    request.onload = function() {
        var data = JSON.parse(this.response);
        _self.data = data;
        if (cb) cb(data); // call callback with data
    };

    request.onerror = function() {
        if (cb) cb({ success: false });
    };


  };

  // create delete prototype method
  Books.prototype.delete = function(id) {

     // the 'this' keyword refers to the object instance
    var _self = this;

    var request = new XMLHttpRequest;

    request.open('DELETE', App.conf.rootUrl + this.url + '/' + id, true);
    request.send();

    request.onload = function() {
        var data = JSON.parse(this.response);
        _self.data = data;
        if (cb) cb(data); // call callback with data
    };

    request.onerror = function() {
        if (cb) cb({ success: false });
    };

  };

  // save Books class to App.models namespace
  App.models.Books = Books;

})()
