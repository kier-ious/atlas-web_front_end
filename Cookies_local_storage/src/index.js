function setCookies() {
  var firstnameValue = document.getElementById('firstname').value;
  var emailValue = document.getElementById('email').value;

  document.cookie = `firstname=${firstnameValue}`;
  document.cookie = `email=${emailValue}`;
}

function showCookies() {
  var cookiesParagraph = document.createElement('p');
  var cookiesText = 'Cookies: ' + document.cookie;
  cookiesParagraph.innerhitml = cookiesText;
  document.body.appendChild(cookiesParagraph);
    console.log("Cookies:", document.cookie);
}
