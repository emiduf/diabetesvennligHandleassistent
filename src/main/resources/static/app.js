document.addEventListener('DOMContentLoaded', function () {
    // Hent elementer
    const filterKnapp = document.getElementById('filterknapp');
    const filterMeny = document.getElementById('filtermeny');
    const checkbox = document.getElementById('filter-diabetes');
    const aktiveFilter = document.getElementById('aktive-filter');
    const produkter = document.querySelectorAll('.produkt');

    // Åpne/lukke nedtrekksmeny
    filterKnapp.addEventListener('click', function () {
        const vises = filterMeny.style.display === 'block';
        filterMeny.style.display = vises ? 'none' : 'block';

        // Vis orange knapp kun hvis ingen filter er aktivt
        if (!checkbox.checked) {
            filterKnapp.classList.toggle('aktiv-filter', !vises);
        }
    });

    // Når brukeren klikker på checkbox
    checkbox.addEventListener('change', function () {
        if (this.checked) {
            leggTilTagg();
            filterKnapp.classList.add('aktiv-filter');
        } else {
            fjernTagg();
            if (filterMeny.style.display !== 'block') {
                filterKnapp.classList.remove('aktiv-filter');
            }
        }
        filtrerProdukter();
    });

    // Legg til filter-tagg ved valg
    function leggTilTagg() {
        if (!document.querySelector('.filter-tagg')) {
            const tagg = document.createElement('div');
            tagg.className = 'filter-tagg';
            tagg.innerHTML = `
                Diabetesvennlig
                <button class="fjern-filter" aria-label="Fjern filter">&times;</button>
            `;
            aktiveFilter.appendChild(tagg);
        }

        // Lukk meny når filter velges
        filterMeny.style.display = 'none';
    }

    // Fjern filter-tagg
    function fjernTagg() {
        const tagg = document.querySelector('.filter-tagg');
        if (tagg) tagg.remove();
    }

    // Klikk på "×" for å fjerne tagg og oppdatere
    aktiveFilter.addEventListener('click', function (e) {
        if (e.target.classList.contains('fjern-filter')) {
            checkbox.checked = false;
            fjernTagg();
            filtrerProdukter();

            // Fjern orange bakgrunn hvis meny ikke er åpen
            if (filterMeny.style.display !== 'block') {
                filterKnapp.classList.remove('aktiv-filter');
            }
        }
    });

    // Filtrer produkter basert på checkbox
    function filtrerProdukter() {
        const aktivt = checkbox.checked;
        produkter.forEach(produkt => {
            const erDiabetesvennlig = produkt.dataset.diabetesvennlig === 'true';
            produkt.style.display = (aktivt && !erDiabetesvennlig) ? 'none' : 'block';
        });
    }
});







