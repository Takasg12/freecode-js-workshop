const instrumentsArr = [

    {
        category: 'woodwinds',
        instrument: 'Flute',
        price: 500
    },
    {
        category: 'woodwinds',
        instrument: 'Clarinet',
        price: 200
    },
    {
        category: 'woodwinds',
        instrument: 'Oboe',
        price: 4000
    }
]

const selectContainer = document.getElementById('instrument-filter')
const productsContainer = document.querySelector('.products-container')

const instrumentCards = (instrumentCategory) => {
    //Jika kategori adalah  'all', kembalikan seluruh array 
    let filteredInstruments
    if (instrumentCategory === 'all') {
        filteredInstruments = instrumentsArr
    } else {
        filteredInstruments = instrumentsArr.filter(instrument => instrument.category === instrumentCategory)
    }
    return filteredInstruments.map(instrument => {
        return `<div class="card"><h2>${instrument.instrument}</h2><p>$${instrument.price}</p></div>`
    })
}
//Event listener untuk dropdown 
selectContainer.addEventListener('change', (event) => {
    const selectedCategory = event.target.value

    productsContainer.innerHTML = instrumentCards(selectedCategory).join('')
})

