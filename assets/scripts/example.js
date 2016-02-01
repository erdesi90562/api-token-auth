'use strict';

const myApp = {
  baseUrl: 'http://10.13.105.91:3000/'
}

$(document).ready(() => {
  $('#sign-up').on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(e.target);
    $.ajax({
      url: myApp.baseUrl + 'sign-up',
      //url: 'http://httpbin.org/post',
      method: 'POST',
      contentType: false,
      processData: false,
      data: formData,
    }).done(function(data) {
      console.log(data);
    }).fail(function(jqxhr) {
      console.error(jqxhr);
    });
  });
// super dirty sign in code
  $('#sign-in').on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(e.target);
    $.ajax({
      url: myApp.baseUrl + 'sign-in',
      method: 'POST',
      contentType: false,
      processData: false,
      data: formData,
    }).done(function(data) {
      myApp.user = data.user;
      console.log(data.user);
      console.log(data);
      console.log(myApp);
    }).fail(function(jqxhr) {
      console.error(jqxhr);
    });
  });

  $('#change-password').on('submit', function(e) {
    e.preventDefault();
    if (!myApp.user) {
      console.error('shit not logged in.');
      return;
    }

    var formData = new FormData(e.target);
    $.ajax({
      url: myApp.baseUrl + 'change-password/' + myApp.user.id,
      method: 'PATCH',
      headers: {
        Authorization: 'Token token=' + myApp.user.token,
      },
      contentType: false,
      processData: false,
      data: formData,
    })
    .done(function(data) {
      console.log(data);
      console.log(myApp);
    })
    .fail(function(jqxhr) {
      console.error(jqxhr);
    });
  });

});

module.exports = true;
