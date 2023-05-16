console.log('brass loaded')

//make api call https://mbo-sd.nl/period3-fetch/music-instrument-brass

// fetch("https://mbo-sd.nl/period3-fetch/music-instrument-brass")
// .then(myData => myData.json())
// .then(textData => showInConsole(textData))

// function showInConsole(data) {
//     console.log(data)
//     const cardOne = document.querySelector(".card-one")
//     for (let i = 0; i < textData.length; i++) {
//         const element = textData[i];
//         return textData
//     }
// }

// function createCardOne(a) {
//     const card = `
//     <div class="card">
//         <img class="card-img-top" src="${a.imageUrl}" alt="Title">
//         <div class="card-body">
//             <h4 class="card-title">${a.title}</h4>
//             <p class="card-text">${a.description}</p>
//         </div>
//     </div>
//     `
//     return card
// }

fetch("https://mbo-sd.nl/period3-fetch/music-instrument-brass")
    .then(eventOne => eventOne.json())
    .then(eventOneData => showInConsole(eventOneData));

function showInConsole(textData) {
    const brassCard = document.querySelector(".brassCard-one")

    for (let i = 0; i < textData.length; i++) {
        const event = textData[i];
        const cardOne = createCardOne(event)
        brassCard.innerHTML += cardOne
    }
    console.log(textData);  
}

function createCardOne(Event) {
    const cardOne = `
    <div class="col d-flex align-items-stretch">
        <div class="card">
            <img class="card-img-top" src="${Event.imageUrl}" alt="Title">
            <div class="card-body">
                <h4 class="card-title">${Event.title}</h4>
                <p class="card-text">${Event.description}</p>
                <h3 class="card-text">Spelers</h3>
                <p class="card-text">${Event.players[0]}</p>
                <p class="card-text">${Event.players[1]}</p>
                <p class="card-text">${Event.players[2]}</p>
            </div>
        </div>
    </div>
`
    return cardOne
}
