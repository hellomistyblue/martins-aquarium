 import { database } from './aquariumData.js';

 export const locationList = () => {
// Generate an HTML representation of each location
     let html = `<section class="location">`;
     for (const locationObject of database.locations) {
        html += `<article class="locations">${locationObject.name}: ${locationObject.country} - ${locationObject.description}</article>`
    }
        html += `</article>`;

        return html;      
}


