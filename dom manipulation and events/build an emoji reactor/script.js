
const updateCount = (button) => {
    const countElement = button.querySelector('.count')
    const countText = countElement.textContent
    const currCount = parseInt(countText.split('/')[0])
    /* console.log("Current count:", currCount) */

    // Cek apakah sudah mencapai 10 
    if (currCount === 10) {
        // Sudah 10, tidak melakukan apa - apa 
        return;
    }

    // Increment count
    const newCount = currCount + 1

    // Update text .count element 
    countElement.textContent = `${newCount}/10`
}

//Event Listener

//bisa menggunakan ini 
/* const happyBtn = document.querySelector('#happy-btn') */
/* const confusedBtn = document.querySelector('#confused-btn') */
/* const sadBtn = document.querySelector('#sad-btn') */
/* const lovingBtn = document.querySelector('#loving-btn') */

/* happyBtn.addEventListener('click', () => {
    updateCount(happyBtn)
}) */

/* confusedBtn.addEventListener('click', () => {
    updateCount(confusedBtn)
}) */

/* sadBtn.addEventListener('click', () => {
    updateCount(sadBtn)
}) */

/* lovingBtn.addEventListener('click', () => {
    updateCount(lovingBtn)
}) */

// Atau bisa menggunakan ini
const btns = document.querySelectorAll('.emoji-btn')

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        updateCount(btn)
    })
})