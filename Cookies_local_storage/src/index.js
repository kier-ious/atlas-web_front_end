function setCookies() {
  var firstnameValue = document.getElementById('firstname').value;
  var emailValue = document.getElementById('email').value;

var currentDate = new Date();
var expirationDate = new Date(currentDate.getTime() + (10 * 24 * 60 * 60 * 1000));

  document.cookie = `firstname=${firstnameValue}; expires=${expirationDate.toUTCString()}; path=/`;
  document.cookie = `email=${emailValue}; expires=${expirationDate.toUTCString()}; path=/`;
}

function showCookies() {
  var cookiesParagraph = document.createElement('p');
  var cookiesText = 'Cookies: ' + document.cookie;
  cookiesParagraph.innerhitml = cookiesText;
  document.body.appendChild(cookiesParagraph);
    console.log("Cookies:", document.cookie);
}
