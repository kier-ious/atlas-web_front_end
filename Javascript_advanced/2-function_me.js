function welcomeMessage(fullName) {
  return function() {
    alert('Welcome ' + fullName);
  }
}

var guillame = welcomeMessage('Guillame');
var alex = welcomeMessage('Alex');
var fred = welcomeMessage('Fred');
