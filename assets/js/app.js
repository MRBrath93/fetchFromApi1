//
// FÆLLES
//

// Vi skal anvende data herfra: https://randomuser.me/

const url = "https://randomuser.me/api/?nat=Dk&results=50";
const wrapperEl = document.querySelector(".containerusers")


// Læs dokumentation og find ud af hvordan man får en user (5 min eller indtil en har et svar)

// Find ud af hvordan man får 50 users (5 min eller indtil en har et svar)

// Fetch og log dem med fetch
fetch(url)
  .then(res => res.json())
  .then(data => renderUsers(data))
  .catch(err => console.log("Ups noget gik galt....", err))

// Prøv nu at kopiere og omskrive det til async/await (Mark viser hvordan)


// async function fetchStuff() {
//   const res = await fetch(url);
//   const data = await res.json();
//   console.log(data)
// }
// fetchStuff();


// I grupperne
//

// Prøv nu at anvende document.createElement(), .classlist.add(), .textContent og append() til at skabe en artikel med følgende struktur per user i results og append i .result:

// function creatUsers(users) {
//   console.log('users:', users)
//   users.results.forEach(result => {
//     const newArticle = document.createElement("article")
//     const newH4 = document.createElement("h4")
//     const newImg = document.createElement("img")

//     newH4.textContent = result.name.title + " " + result.name.first + " " + result.name.last

//     newImg.src = result.picture.large
//     newImg.alt = "ALT";

//     newH4.classList.add("title")

//     newArticle.append(newH4, newImg)
//     wrapperEl.append(newArticle)
//   })
// }
{
  /* <article>
  <h4 class="title">NAVN</h4>
  <img src="URL" alt="ALT" />
</article>; */
}

// Prøv nu at udkommentere ovenfor og anvend istedet .innerHTML med strukturen fra index.html. Igen en per bruger i results

function renderUsers(users) {
  users.results.forEach(user => {
    wrapperEl.innerHTML += `<article class="version2">
    <h4 class="title">${user.name.title} ${user.name.first} ${user.name.last}</h4>
    <p class="cityCountry">
    <i class="fa-solid fa-city"></i>${user.location.city} - <span>${user.location.country}</span>
    </p>
    <p class="adresss">
    <i class="fa-regular fa-address-card"></i>${user.location.street.name} ${user.location.street.number}
    </p>
    <p class="email">
    <i class="fa-regular fa-envelope"></i>${user.email}
    </p>
    <p class="age"><i class="fa-solid fa-person"></i>${user.dob.age}</p>
    <img src="${user.picture.medium}" alt="ALT" />
    </article>`
  })
}
//
// FÆLLES
//

// Hvis vi kan nå det: implementér filtrering i form af en input[type="search"]
// Fang input
const inputEl = document.querySelector("#input");

// Lyt efter changeevent find den værdi der er i inputfeltet
inputEl.addEventListener("change", e => {
  console.log("my event happend");

})

