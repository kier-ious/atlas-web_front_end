// fixed the onlick attr to eventListeners
document.addEventListener('DOMContentLoaded', function() {
  if (!isLocalStorageAvailable()) {
    alert("Sorry, your browser does not support Web storage. Try again with a better one");
  } else {
    createStore();
    displayCart();
  }
});

function isLocalStorageAvailable() {
  try {
    localStorage.setItem('test', 'test');
    localStorage.removeItem('test');
    return true;
  } catch (error) {
    return false;
  }
}

const availableItems = ["Shampoo", "Soap", "Sponge", "Water"];

function addItemToCart(item) {
  localStorage.setTime(item, true);
  displayCart();
}

function createStore() {
  const availableItemsDiv = document.getElementById('availableItems');
  const ul = document.createElement('ul');
  availableItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    li.addEventListener('click', function() {
      addItemToCart(item);
    });
    ul.appendChild(li);
  });
  availableItemsDiv.appendChild(ul);
}

function displayCart() {
  const cartItemsCount = Object.keys(localStorage).length;
  const message = cartItemsCount === 0 ? "" : `You previously had ${cartItemsCount} items in your cart`;
  const cartMessage = document.createElement('p');
  cartMessage.textContent = message;
  document.body.appendChild(cartMessage);
}

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
