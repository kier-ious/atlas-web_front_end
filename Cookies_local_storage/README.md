# Cookies & local storage

This guide covers essential concepts and techniques for handling cookies and using browser web storage in JavaScript.

## Creating Cookies
In JavaScript, cookies can be created using the document.cookie property. Cookies are stored as strings and can contain various information such as user preferences, session identifiers, etc.
<!-- document.cookie = "username=John Doe"; -->

## Setting Specific Cookie Settings
You can set specific settings for cookies such as expiration date, domain, path, and secure flag.
<!-- document.cookie = "username=John Doe; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=-->

## Reading Cookies
Cookies can be read using the document.cookie property. This property returns a semicolon-separated string containing all cookies associated with the current document.
<!-- var cookies = document.cookie; -->

## Using js-cookie Library
js-cookie is a popular library for simplifying cookie manipulation in JavaScript. It provides a simple API for creating, reading, and deleting cookies.
<!-- Set a cookie -->
Cookies.set('username', 'John Doe');

<!-- Get a cookie -->
var username = Cookies.get('username');

<!-- Delete a cookie -->
Cookies.remove('username');

## Browser Web Storage
Local Storage
Local Storage is a browser feature that allows developers to store data persistently in the user's browser. Data stored in local storage remains available even after the browser is closed and reopened.
<!-- Set an item in local storage -->
localStorage.setItem('username', 'John Doe');

<!-- Get an item from local storage -->
var username = localStorage.getItem('username');

<!-- Remove an item from local storage -->
localStorage.removeItem('username');

## Session Storage
Session Storage is similar to local storage but scoped to the current browser tab. Data stored in session storage is cleared when the browser tab is closed.
<!-- Set an item in session storage -->
sessionStorage.setItem('username', 'John Doe');

<!-- Get an item from session storage -->
var username = sessionStorage.getItem('username');

<!-- Remove an item from session storage -->
sessionStorage.removeItem('username');

## Differences Between Local Storage and Session Storage
### The main differences between local storage and session storage are:

Persistence: Data in local storage persists even after the browser is closed and reopened, while session storage data is cleared when the browser tab is closed.
Scope: Local storage data is shared across all tabs of the same origin, while session storage data is scoped to the current browser tab.
Storage Limit: Local storage typically has a larger storage limit compared to session storage.
