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

