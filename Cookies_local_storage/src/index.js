function setCookies() {
  var firstname = document.getElementById('firstname').value;
  var email = document.getElementById('email').value;

  document.cookie = `firstname=${firstname}`;
  document.cookie = `email=${email}`;
}

function showCookies() {
  var cookies = document.cookie.split(';');

  var p = document.createElement('p');
  p.innerHTML = 'Cookies';
  cookies.forEach(cookie => {
    p.innerHTML += '<br>' + cookie.trim();
  });

  document.body.appendChild(p);
}
