

console.log('Main JS loaded');

console.log('Main JS loaded');


const artist = document.querySelector('.fhsdfjhs3vwo');

if (artist) {
    fetch("https://mbo-sd.nl/period3-fetch/music-artist-emerson-lake-palmer")
        .then((response) => response.json())
        .then((data) => artists(data, 'emerson-lake'));
    fetch("https://mbo-sd.nl/period3-fetch/music-artist-david-bowie")
        .then((response) => response.json())
        .then((data) => artists(data, 'david'));
    fetch("https://mbo-sd.nl/period3-fetch/music-artist-ed-sheeran")
        .then((response) => response.json())
        .then((data) => artists(data, 'ed'));
}

function artists(data, artist) {
    for (let i = 0; i < data.length; i++) {
        document.querySelector(`.${artist} .song-${i + 1}`).innerText = data[i].title;
        document.querySelector(`.${artist} .image-${i + 1}`).src = data[i].imageUrl;
        document.querySelector(`.${artist} .description-${i + 1}`).innerText = data[i].description;
        document.querySelector(`.${artist} .length-${i + 1}`).innerText = data[i].duration;
        document.querySelector(`.${artist} .release-${i + 1}`).innerText = data[i].releaseYear;
        document.querySelector(`.${artist} .album-${i + 1}`).innerText = data[i].albumName;
        document.querySelector(`.${artist} .youtube-${i + 1}`).href = data[i].videoUrl;
    }
}


        
    


