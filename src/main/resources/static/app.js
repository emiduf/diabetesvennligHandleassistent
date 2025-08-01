document.addEventListener('DOMContentLoaded', function () {
    const filterKnapp = document.getElementById('filterknapp');
    const filterMeny = document.createElement('div');
    filterMeny.className = 'filtermeny';
    filterMeny.innerHTML = `
        <label>
            <input type="checkbox" id="diabetes-filter">
            Diabetesvennlig
        </label>
    `;
    filterKnapp.parentNode.appendChild(filterMeny);

    const checkbox = document.getElementById('diabetes-filter');
    const produkter = document.querySelectorAll('.produkt');

    // Toggle synligheten til menyen
    filterKnapp.addEventListener('click', () => {
        filterMeny.style.display = filterMeny.style.display === 'flex' ? 'none' : 'flex';
    });

    // Vis/skjul produkter avhengig av filteret
    checkbox.addEventListener('change', () => {
        const aktiv = checkbox.checked;

        produkter.forEach(produkt => {
            const erDiabetesvennlig = produkt.dataset.diabetesvennlig === 'true';
            produkt.style.display = (!aktiv || erDiabetesvennlig) ? 'block' : 'none';
        });

        // Farge på filterknappen
        filterKnapp.classList.toggle('aktiv-filter', aktiv);
    });
});






