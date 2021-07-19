document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

document.onkeydown = function (e) {
  if (event.keyCode == 123) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
    return false;
  }
};

let baseUrl = "https://pokeapi.co/api/v2/ability";
window.onload = function () {
  fetchData(baseUrl);
};

function onClickButton(url) {
  fetchData(url);
}

function fetchData(url) {
  let loaderDiv = document.getElementById("loader");
  let prevButton = document.getElementById("prevButton");
  let nextButton = document.getElementById("nextButton");
  loaderDiv.style.display = "block";
  const requestOptions = {
    method: "GET",
  };
  fetch(url, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      populateData(data.results);
      if (data.next !== null) {
        nextButton.disabled = false;
        nextButton.onclick = () => onClickButton(data.next);
      } else {
        nextButton.disabled = true;
      }
      if (data.previous !== null) {
        prevButton.disabled = false;
        prevButton.onclick = () => onClickButton(data.previous);
      } else {
        prevButton.disabled = true;
      }
      loaderDiv.style.display = "none";
    })
    .catch((err) => {
      console.log(err);
      alert("Error Occured while fetching data");
      loaderDiv.style.display = "none";
    });
}

function populateData(data = []) {
  let dataDiv = document.getElementById("dataDiv");
  dataDiv.innerHTML = "";
  data.forEach((element) => {
    var card = document.createElement("div");
    card.setAttribute("class", "card");
    var title = document.createElement("p");
    title.setAttribute("class", "cardTitle");
    var textnode = document.createTextNode(element.name);
    title.appendChild(textnode);

    var linkUrl = document.createElement("span");
    // linkUrl.setAttribute("href", element.url);
    // linkUrl.setAttribute("target", "_blank");
    var linkText = document.createTextNode(element.url);
    linkUrl.setAttribute("class", "cardUrl");

    linkUrl.onclick = () => showModal(element);
    linkUrl.appendChild(linkText);

    card.appendChild(title);
    card.appendChild(linkUrl);
    dataDiv.appendChild(card);
  });
}

// Get the modal
var modalBox = document.getElementById("modal");

var closeSpan = document.getElementById("close");

function showModal(element) {
  document.getElementById("subContentTitle").innerHTML = element.name;
  document.getElementById("subContentUrl").innerHTML = element.url;
  fetchDataForModal(element.url);
  modalBox.style.display = "block";
}

closeSpan.onclick = function () {
  modalBox.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modalBox) {
    modalBox.style.display = "none";
  }
};

function fetchDataForModal(url) {
  let subContentData = document.getElementById("subContentData");
  subContentData.innerHTML='';
  const requestOptions = {
    method: "GET",
  };
  fetch(url, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      for (let key in data) {
        let typeOfData = typeof data[key];
        if (typeOfData == "object") {
          subContentData.innerHTML +=
            "<p>" + key + " - " + data[key].length + " entries (" + typeof data[key] + ")</p>";
        } else {
          subContentData.innerHTML +=
            "<p>" + key + " - " + data[key] + " (" + typeof data[key] + ")</p>";
        }
      }
    })
    .catch((err) => {
      console.log(err);
      alert("Error Occured while fetching data for modal ");
    });
}
