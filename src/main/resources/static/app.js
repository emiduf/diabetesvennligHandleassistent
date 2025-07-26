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




