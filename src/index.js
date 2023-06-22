import "./styles.css";

const text = document.getElementById("input-show");
const button = document.getElementById("submit-data");
const divAdd = document.getElementsByClassName("show-data")[0];

button.addEventListener("click", getShows);

async function getShows() {
  const url = "https://api.tvmaze.com/search/shows?q=" + text.value;
  const showPromise = await fetch(url);
  const showJson = await showPromise.json();
  console.log(showJson);

  showJson.forEach((element) => {
    let img = document.createElement("img");
    if (element.show.image !== null) {
      img.setAttribute("src", element.show.image.medium);
    }
    let divShowInfo = document.createElement("div");
    divShowInfo.setAttribute("class", "show-info");
    let header = "";
    if (element.show.name !== null) {
      header = "<h1>" + element.show.name + "</h1>";
    }
    let summary = "";
    if (element.show.summary !== null) {
      summary = element.show.summary;
    }

    divShowInfo.innerHTML = header + summary;

    divAdd.appendChild(img);
    divAdd.appendChild(divShowInfo);
  });
}
