document.addEventListener('DOMContentLoaded', function() {
    const katKnapp = document.getElementById('kategorier-knapp');
    const katMeny = document.getElementById('kategori-meny');
    const oppKnapp = document.getElementById('oppskrifter-knapp');
    const oppMeny = document.getElementById('oppskrift-meny');

    //klikk på kategorier
    katKnapp.addEventListener('click', function (event) {
        event.stopPropagation();

        //åpne/lukk kategorier
        const visKategori = katMeny.style.display !== 'flex';
        katMeny.style.display = visKategori ? 'flex' : 'none';

        //lukk oppskrifter
        oppMeny.style.display = 'none';

        //oppdater strek
        katKnapp.classList.toggle('aktiv-knapp', visKategori);
        oppKnapp.classList.remove('aktiv-knapp');
    });

    oppKnapp.addEventListener('click', function (event) {
        event.stopPropagation();

        //åpne/lukk oppskrifter
        const visOppskrift = oppMeny.style.display !== 'flex';
        oppMeny.style.display = visOppskrift ? 'flex' : 'none';

        //lukk kategorier
        katMeny.style.display = 'none';

        //oppdater strek
        oppKnapp.classList.toggle('aktiv-knapp', visOppskrift);
        katKnapp.classList.remove('aktiv-knapp');
    });

    // lukk begge når man klikker utenfor
    document.addEventListener('click', function (e) {
        if (!katKnapp.contains(e.target) && !katMeny.contains(e.target)) {
            katMeny.style.display = 'none';
            katKnapp.classList.remove('aktiv-knapp');
        }
        if (!oppKnapp.contains(e.target) && !oppMeny.contains(e.target)) {
            oppMeny.style.display = 'none';
            oppKnapp.classList.remove('aktiv-knapp');
        }
    });
});

//Filter
document.addEventListener('DOMContentLoaded', function () {
    const filterKnapp = document.getElementById('filterknapp');
    const filterMeny = document.getElementById('filtermeny');

    filterKnapp.addEventListener('click', function (e) {
        e.stopPropagation();
        const vises = filterMeny.style.display === 'flex';

        // Vis/skjul meny
        filterMeny.style.display = vises ? 'none' : 'flex';

        // Legg til/fjern aktiv stil
        if (vises) {
            filterKnapp.classList.remove('aktiv-filter');
        } else {
            filterKnapp.classList.add('aktiv-filter');
        }
    });

    // Klikk utenfor = lukk meny og fjerner farge
    document.addEventListener('click', function (e) {
        if (!filterMeny.contains(e.target) && !filterKnapp.contains(e.target)) {
            filterMeny.style.display = 'none';
            filterKnapp.classList.remove('aktiv-filter');
        }
    });
});

//Aktive filtre
document.addEventListener('DOMContentLoaded', function () {
    const filterKnapp = document.getElementById('filterknapp');
    const filterMeny = document.getElementById('filtermeny');
    const filterContainer = document.getElementById('valgte-filter');
    const checkboxes = filterMeny.querySelectorAll('input[type="checkbox"]');

    // Toggle meny
    filterKnapp.addEventListener('click', function () {
        filterMeny.classList.toggle('vis');
        filterKnapp.classList.toggle('aktiv-filter');
    });

    // Håndter sjekkbokser
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            const labelText = this.parentNode.textContent.trim();

            if (this.checked) {
                const tag = document.createElement('div');
                tag.className = 'filter-tag';
                tag.setAttribute('data-filter', labelText);
                tag.innerHTML = `
          ${labelText}
          <button type="button" class="fjern-filter" aria-label="Fjern filter">&times;</button>
        `;
                filterContainer.appendChild(tag);
            } else {
                const tag = filterContainer.querySelector(`[data-filter="${labelText}"]`);
                if (tag) tag.remove();
            }

            // Hvis minst én er valgt → behold oransje knapp
            const noenValgt = [...checkboxes].some(cb => cb.checked);
            filterKnapp.classList.toggle('aktiv-filter', noenValgt);
        });
    });

    // Fjern tag med X
    filterContainer.addEventListener('click', function (e) {
        if (e.target.classList.contains('fjern-filter')) {
            const tag = e.target.closest('.filter-tag');
            const text = tag.getAttribute('data-filter');

            checkboxes.forEach(cb => {
                if (cb.parentNode.textContent.trim() === text) cb.checked = false;
            });

            tag.remove();

            // Oppdater knappens farge
            const noenValgt = [...checkboxes].some(cb => cb.checked);
            filterKnapp.classList.toggle('aktiv-filter', noenValgt);
        }
    });
});





