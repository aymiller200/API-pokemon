let starter = 1;
const baseURL = 'https://pokeapi.co/api/v2/pokemon/';

const img = document.querySelector('#imageOne');
const next = document.querySelector('#nextBtn');
const prev = document.querySelector('#prevBtn');
const nameOfPoke = document.querySelector('#p1');
const typeOfPoke = document.querySelector('#p2');
const secondTypeOfPoke = document.querySelector('#p3');
const heightOfPoke = document.querySelector('#p4');
const weightOfPoke = document.querySelector('#p5');
const searchP = document.querySelector('#search');
const goBack = document.querySelector('#goBack');

const upBtn = document.querySelector('#btnUp');
const downBtn = document.querySelector('#btnDown');

async function fetchRes() {

    const res = await fetch(baseURL + starter)
    const json = await res.json()
        .then(function (json) {

            const secondType = json.types[1]
            if (secondType) {
                secondTypeOfPoke.textContent = 'TYPE TWO ' +
                    json.types[1].type.name.toUpperCase()
                secondTypeOfPoke.style.display = 'block'
            } else {
                secondTypeOfPoke.style.display = 'none'

            }

            typeOfPoke.textContent = 'TYPE ONE: ' + json.types[0].type.name.toUpperCase()
            nameOfPoke.textContent = 'NAME: ' + json.name.toUpperCase()
            heightOfPoke.textContent = 'HEIGHT: ' + json.height + 'dm'
            weightOfPoke.textContent = 'WEIGHT: ' + json.weight + 'hg'
            img.src = json.sprites.front_default

            if (json.id == 1 || json.name == 'bulbasaur') {
                prev.style.display = 'none'
            } else {
                prev.style.display = 'block'
            }

            if (json.id == 1 || json.name == 'bulbasaur') {
                goBack.style.display = 'none'
            } else {
                goBack.style.display = 'block'
            }

            if (json.id == 898 || json.name == 'calyrex') {
                next.style.display = 'none'
            } else {
                next.style.display = 'block'
            }

            starter = json.id


        }).catch(err => console.log(err))
}
function searchPoke(e) {
    e.preventDefault()
    starter = document.querySelector('#textEntryBox').value.toLowerCase()

    fetchRes()
}

function reset() {
    document.getElementById('#search').value = ''
}

function nextPoke(e) {
    starter++

    if (starter) {
    } else {
        starter = 1
    }
    fetchRes(e)
}

function previousPoke(e) {
    starter--
    if (starter) {
    } else {
        starter = 1
    }
    fetchRes(e)
}

function toOne(e) {
    starter = 1
    fetchRes(e)
}

searchP.addEventListener('submit', searchPoke)
goBack.addEventListener('click', toOne)
next.addEventListener('click', nextPoke);
prev.addEventListener('click', previousPoke);

fetchRes()






