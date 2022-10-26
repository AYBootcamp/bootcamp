const NUMBERS_TO_PICK = 6; // pick 6 numbers for 649 play
const MIN_649 = 1;
const MAX_649 = 49;

// helper
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

function generate() {
    let results = [];
    // Generate 6 unique integers between 1 and 49
    while (results.length < NUMBERS_TO_PICK) {
        const number = getRandomIntInclusive(MIN_649, MAX_649);
        if (!results.includes(number)) {
            results.push(number)
        }
    }
    return results.sort((a,b)=> a - b);
}


function animateDisappear(element) {
    const promise = new Promise(resolve=> {
        element.classList.add("animated-number-move-up");
        setTimeout(function(){
            element.classList.remove("animated-number-move-up");
            resolve();
        }, 150)
    })

    return promise
}

function animateAppear(element) {
    const promise = new Promise(resolve=> {
        element.classList.add("animated-number-bottom-up");
        setTimeout(function(){
            element.classList.remove("animated-number-bottom-up");
            resolve()
        }, 150)
    })

    return promise
}

// onClick callback
async function generateBtnOnClick() {
    const results = generate();
    for (let i=0; i < results.length; i++) {
        const element = document.getElementById(`number-${i}`);
        await animateDisappear(element);
        element.innerText = results[i];
        await animateAppear(element);
    }
}


function initialPicks() {
    const results = generate();
    for (let i=0; i < results.length; i++) {
        const element = document.getElementById(`number-${i}`)
        element.innerText = results[i];
    }
}


// Pick initial numbers
initialPicks()