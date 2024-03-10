function createElement(data) {
  document.body.appendChild(document.createElement("p")).textContent = data;
}

function queryWikipedia(callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*");
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      const extract = response.query.pages[Object.keys(response.query.pages)[0]].extract;
      callback(extract);
    }
  };

  xhr.send();
}

queryWikipedia(createElement);
