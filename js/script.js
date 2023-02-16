let sectors = document.querySelector('.sectors')
let openBtn = document.querySelector('.open__korzina')
let korzina = document.querySelector('.korzina')
let closebtn = document.querySelector('.close')
let div = document.querySelector('.div')


let order = {
    userId: 'Jaxongir Ortiqxojayev',
    places: [
        {
            sectore: '',
            place: '',
            row: ''
        }
    ]
}

for (let i = 1; i < 6; i++) {
    let sectore = document.createElement('div')
    sectore.classList.add('sectore')

    for (let k = 1; k < 101; k++) {
        let place = document.createElement('div')
        let span = document.createElement('span')

        place.classList.add('place')

        span.innerHTML = k

        place.append(span)
        sectore.append(place)

        place.onclick = () => {
            place.classList.add('taken')
            let row = k > 10 ? (10 - k.toString()[1]) + k : 1

            let myOrder = {
                id: Math.random(),
                sectore: `A${i}`,
                place: k,
                row: row.toString().length === 3 ? row.toString().slice(0, 2) : row.toString()[0]
            }

            order.places.push(myOrder)
            cardCreate()
            console.log(order);
        }

    }

    sectors.append(sectore)
}

function openClose() {
    openBtn.onclick = () => {
        korzina.style.display = 'block'

    }

    closebtn.onclick = () => {
        korzina.style.display = 'none'
    }
}
openClose()

function cardCreate() {
    div.innerHTML = ''

    for (let item of order.places) {

        let card = document.createElement('div')
        let card__dashed = document.createElement('div')
        let card__title = document.createElement('div')
        let span = document.createElement('span')
        let card__type = document.createElement('div')
        let h2 = document.createElement('h2')
        let pOne = document.createElement('p')
        let pTwo = document.createElement('p')
        let card__info = document.createElement('div')
        let ul = document.createElement('ul')
        let liOne = document.createElement('li')
        let liTwo = document.createElement('li')
        let liThre = document.createElement('li')
        let korzina__title = document.createElement('div')
        let korzinaH2 = document.createElement('h2')
        let img = document.createElement('img')

        card.classList.add('card')
        card__dashed.classList.add('card__dashed')
        card__type.classList.add('card__type')
        card__title.classList.add('card__title')
        card__info.classList.add('card__info')

        span.innerHTML = '250 000'
        h2.innerHTML = 'Концерт Федука'
        pOne.innerHTML = '2026.05.23'
        pTwo.innerHTML = '18:00'

        liOne.innerHTML = 'Сектор: ' + item.sectore
        liTwo.innerHTML = 'Ряд: ' + item.row
        liThre.innerHTML = 'Место: ' + item.place


        card.append(card__dashed, card__title, card__type, card__info)
        card__title.append(span)
        card__type.append(h2, pOne, pTwo)
        card__info.append(ul)
        ul.append(liOne, liThre, liTwo)
        korzina__title.append(korzinaH2, img)
        div.append(card)
        korzina.append(div)

        card.onclick = () => {
            card.style.display = 'none'
        }

        if (item.sectore === 'A2') {
            card.classList.add('red-card')
        } else if (item.sectore === 'A3') {
            card.classList.add('black-card')
        } else if (item.sectore === 'A4') {
            card.classList.add('blue-card')
        } else if (item.sectore === 'A5') {
            card.classList.add('green-card')
        }
    }
}