function setCookies() {
  var firstnameValue = document.getElementById('firstname').value;
  var emailValue = document.getElementById('email').value;

var currentDate = new Date();
var expirationDate = new Date(currentDate.getTime() + (10 * 24 * 60 * 60 * 1000));

  document.cookie = `firstname=${firstnameValue}; expires=${expirationDate.toUTCString()}; path=/`;
  document.cookie = `email=${emailValue}; expires=${expirationDate.toUTCString()}; path=/`;
}

function showCookies() {
  var email = getCookie('email');
  var firstname = getCookie('firstname');

  var cookiesParagraph = document.createElement('p');
  cookiesParagraph.textContent = `Email: ${email} - Firstname: ${firstname}`;
  document.body.appendChild(cookiesParagraph);
}

function getCookie(name) {
  const cookieName = `${name}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(';');
  for (let i = 0; i < cookieArray.length; i++) {
    const cookie = cookieArray[i].trim();
    if (cookie.indexOf(cookieName) === 0) {
      return cookie.substring(cookieName.length, cookie.length);
    }
  }
  return '';
}
