import { fishList } from './fishList.js'
import { tipList } from './tipList.js'
import { locationList } from './locationList.js'
import { organizedFish } from './fishList.js'

// Generate the fish list
const fishListElement = document.getElementById("fishList")
fishListElement.innerHTML = organizedFish
// Generate the care tips
const tipHTML = tipList()
const tipListElement = document.getElementById("tipList")
tipListElement.innerHTML = tipHTML
// Generate the location list
const locationHTML = locationList()
const locationListElement = document.getElementById("locationList")
locationListElement.innerHTML = locationHTML
// Render each HTML string to the correct DOM element

console.log(organizedFish.join(", "))
console.log(tipHTML)
console.log(locationHTML)