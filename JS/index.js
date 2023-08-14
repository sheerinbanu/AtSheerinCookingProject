const orderButton = document.getElementById('orderButton');

orderButton.addEventListener('mouseover', () => {
    orderButton.style.backgroundColor = '#ff6600';
});

orderButton.addEventListener('mouseout', () => {
    orderButton.style.backgroundColor = '';
});

orderButton.addEventListener('click', () => {
    // Ouvrir la page Deliveroo dans une nouvelle fenêtre
    window.open('https://www.deliveroo.fr/', '_blank');
});
