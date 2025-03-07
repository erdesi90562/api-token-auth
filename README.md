![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# Using curl and jQuery.ajax to access an authenticated API

## Introduction

We'll use `curl` and `$.ajax` with html forms to sign up, sign in, and sign out of an API.  We'll also change our passwords.  The API uses Token authentication and we'll see how to make authenticated request (sign out and change password).

## Objectives

By the end of this, students should be able to:

- use `curl` to exercise an authenticated API
- Use `$.ajax` to connect to an authenticated API

## Instructions

Fork, clone, branch, and npm install.

## Using web APIs

Web APIs often require some sort of authentication.  The game API requires users to register and then login to gain an authentication token.

We'll use `curl`, `httpbin.org`, and `jQuery.ajax` to connect to an authenticated API running on my laptop.

The operations we'll perform:

verb | path | parameters
---- | ---- | ----------
POST | `/sign-up` | `credentials` containing `email` and `password`
POST | `/sign-in` | `credentials` containing `email` and `password` (response contains auth data)
PATCH | `/change-password/:id` | `password` containing `old` and `new` (requires Authorization header)
DELETE | `/sign-out/:id` | None (requires Authorization header)

### Registering with the API

#### Demo

First we'll test our command against an echo server to make sure we're sending the right data.  There's no need to use an actual e-mail address and don't use anything you might want to actually use as a password.

We'll use `api-test/sign-up` to run curl, first sending JSON then sending data the way the browser does.  We'll see how the server treats both ways of sending data (it's all just string) in the same way.

If we left out the `--include` flag we would't see the response header.  What's the benefit of using an echo server?

#### Code along

Next we'll want to actually register with the API.

We'll modify `api-test/sign-up` to connect to the server running on my laptop.

#### Code along again

Now let's use the code in `assests/scripts/example.js` to get another "e-mail" address registered with the API.  We'll again start with the echo server.

### Logging into the API

#### Demo

We'll use `api-test/sign-in` using JSON.

#### Code along

Now with url encoded data.

#### Practice

Add a form to `index.html` and code to `assets/scripts/example.js` to login to the API.  You may want to start by using the echo service to check your request.

What should we do with the data returned by the API?

### Changing the password

#### Code along

We'll use `api-test/change-password` to change a password.  After that we'll verify that we can no longer authenticate using the old password.

#### Practice

Add a change password form to `index.html` and code to `assets/scripts/example.js` to change the password.

### Signing out

Signing out invalidates the the current token.

#### Code along

We'll use `api-test/sign-out` to sign out of the API.  We'll verify that the token we used is no longer valid.

#### Practice

Add a sign out form to `index.html` and code to `assets/scripts/example.js` to sign out of the API.

## Tasks

Developers should run these often!

-   `grunt nag` or just `grunt`: runs code quality analysis tools on your code
    and complains
-   `grunt reformat`: reformats all your code in a standard style
-   `grunt serve`: generates bundles, watches, and livereloads
-   `grunt test`: runs any automated tests, depends on `grunt build`
-   `grunt build`: place bundled styles and scripts where `index.html` can find
    them

## [License](LICENSE)

Source code distributed under the MIT license. Text and other assets copyright
General Assembly, Inc., all rights reserved.
