

// event dome 013
fetch("https://mbo-sd.nl/period3-fetch/music-event-013")
    .then(eventOne => eventOne.json())
    .then(eventOneData => showEventOne(eventOneData));

function showEventOne(eventOneData) {
    const eventCard = document.querySelector(".event-card")

    for (let i = 0; i < eventOneData.length; i++) {
        const eventZeroThirteen = eventOneData[i];
        const cardOne = createCardOne(eventZeroThirteen)
        eventCard.innerHTML += cardOne
    }
    console.log(eventOneData);
    
}



function createCardOne(firstEvent) {
    const cardOne = `
    <div class="col d-flex align-items-stretch h-100">
<div class="card">
  <img src="${firstEvent.imageUrl}" class="card-img-top cool-pics " alt="...">
  <div class="card-body  ">
    <h3 class="card-title">${firstEvent.title}</h3>
    <h6 class="card-subtitle mb-2 text-muted "></h6>
    <p class="card-text">${firstEvent.description} euro</p>
    <p>Dit evenement is op ${firstEvent.date} in ${firstEvent.place} vanaf ${firstEvent.time} uur.</p>
    <p><h3>Prijs: ${firstEvent.ticketPrice} euro</h3></p>
    <button class="btn btn-success"><h3>Koop tickets!</h3></button>  
  </div>
</div>
</div>
`
    return cardOne
}
