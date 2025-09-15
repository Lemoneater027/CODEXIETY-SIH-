// js/render-monasteries.js

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
  // Get the container where you want to show monasteries
  const container = document.querySelector('.temp');
  if (!container) return;

  // Get all monasteries from your data
  const monasteries = MonasteryData.monasteries;

  // Clear any existing content
  container.innerHTML = '';

  // For each monastery, create the HTML structure
  monasteries.forEach(monastery => {
    // Create the card div
    const card = document.createElement('div');
    card.className = 'temp1';

    // Monastery image
    const img = document.createElement('img');
    img.src = monastery.images.main.replace(/^\//, ''); 
      // remove leading slash if your files are in the same folder
    img.alt = monastery.name.english + ' Monastery';

    // Link
    const link = document.createElement('a');
    link.href = `monastery.html?id=${monastery.id}`; 
      // passes id to detail page
    link.textContent = monastery.name.english.toUpperCase();

    // Append image and link to card
    card.appendChild(img);
    card.appendChild(link);

    // Append card to container
    container.appendChild(card);
  });
});
