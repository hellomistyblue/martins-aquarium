import { database } from './aquariumData.js';

export const tipList = () => {
    // Generate an HTML representation of each tip
    let html = `<ul>`;
    for (const tipObject of database.tips) {
        html += `<li>${tipObject.topic}: ${tipObject.text}</li>`
    }
        html += `</ul>`;

        return html;      
}

