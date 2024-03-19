// fixed the onlick attr to eventListeners
document.addEventListener('DOMContentLoaded', function() {
  var loginButton = document.getElementById('loginButton');

  loginButton.addEventListener('click', function() {
    setCookiesAndShowWelcomeMessage();
  })
})

function setCookiesAndShowWelcomeMessage() {
  var firstnameValue = document.getElementById('firstname').value;
  var emailValue = document.getElementById('email').value;

  var currentDate = new Date();
  var expirationDate = new Date(currentDate.getTime() + (10 * 24 * 60 * 60 * 1000));

  Cookies.remove('firstname', { path: '/'});
  Cookies.remove('email', { path: '/'});


  Cookies.set(`firstname=${firstnameValue}`, { expires: expirationDate, path: '/'});
  Cookies.set(`email=${emailValue}`, { expires: expirationDate, path: '/'});

  showWelcomeMessageOrForm();
}

function showCookies() {
  var email = Cookies.get('email');
  var firstname = Cookies.get('firstname');

  var cookiesParagraph = document.createElement('p');
  cookiesParagraph.textContent = `Email: ${email} - Firstname: ${firstname}`;
  document.body.appendChild(cookiesParagraph);
}

// function getCookie(name) {
//   const cookieName = `${name}=`;
//   const decodedCookie = decodeURIComponent(document.cookie);
//   const cookieArray = decodedCookie.split(';');
//   for (let i = 0; i < cookieArray.length; i++) {
//     const cookie = cookieArray[i].trim();
//     if (cookie.indexOf(cookieName) === 0) {
//       return cookie.substring(cookieName.length, cookie.length);
//     }
//   }
//   return '';
// }

function deleteCookiesAndShowForm() {
  Cookies.remove('firstname', { path: '/'});
  Cookies.remove('email', { path: '/'});
  showForm();
}

    function showForm() {
      hideWelcomeMessage();
      document.getElementById('loginForm').style.display = 'block';
    }

    function hideForm() {
      document.getElementById('loginForm').style.display = 'none';
    }

function showWelcomeMessageOrForm() {
  var firstname = getCookie('firstname');
  if (firstname) {
    welcomeMessage = document.createElement('h1');
    welcomeMessage.textContent = `Welcome ${firstname} `;
    var logoutLink = document.createElement('a');
    logoutLink.textContent = '(logout)';
    logoutLink.style.fontStyle = 'italic';
    logoutLink.style.fontWeight = 'normal';
    logoutLink.style.marginLeft = '10px';
    logoutLink.href = '#';
    logoutLink.onclick = function() {
      deleteCookiesAndShowForm();
      hideWelcomeMessage();
      return false;
    };
    welcomeMessage.appendChild(logoutLink);
  } else {
    showForm();
  }
  document.body.innerHTML = '';
  document.body.appendChild(welcomeMessage);
}

function hideWelcomeMessage() {
  var welcomeMessage = document.querySelector('h1');
  if (welcomeMessage) {
    welcomeMessage.remove();
  }
}
