import { database } from './aquariumData.js';

export const fishList = () => {
    // Generate an HTML representation of each fish
    let html = `<ul>`;
    for (const fishObject of database.fish) {
        html += `<li>${fishObject.species}</li>`
    }
        html += `</ul>`;

        
        return html;      
}

// I'm only working below here

//Make list of fish that are a multiple of 3

//Make a list that are a multiple of 5

//Make a list of the remaining fish last


/*
    From the source data, which should never be modified,
    filter out each color of socks into its own array
*/
const mostHolyFish = []
const soldierFish = []
const regularFish = []

for (const fishObject of database.fish) {
    if (fishObject.length % 3 === 0) {
        mostHolyFish.push(fishObject.species)
    } else if (fishObject.length % 5 === 0) {
        soldierFish.push(fishObject.species)
    } else {
        regularFish.push(fishObject.species)
    }
}
export const organizedFish = `${mostHolyFish.join(", ")}, ${soldierFish.join(", ")}, ${regularFish.join(", ")}`






















