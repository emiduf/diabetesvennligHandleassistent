document.addEventListener('DOMContentLoaded', function() {
    const katKnapp = document.getElementById('kategorier-knapp');
    const katMeny = document.getElementById('kategori-meny');
    const oppKnapp = document.getElementById('oppskrifter-knapp');
    const oppMeny = document.getElementById('oppskrift-meny');

    //klikk på kategorier
    katKnapp.addEventListener('click', function (event) {
        event.stopPropagation();

        //lukk oppskriftsmeny om den er åpen
        if (oppMeny.style.display === 'flex') {
            oppMeny.style.display = 'none';
        }

        //toggle kategori-meny
        katMeny.style.display = katMeny.style.display === 'flex' ? 'none' : 'flex';
    });

    //klikk på oppskrifter
    oppKnapp.addEventListener('click', function (event) {
        event.stopPropagation();

        //lukk kategori-meny om den er åpen
        if (katMeny.style.display === 'flex') {
            katMeny.style.display = 'none';
        }

        //toggle oppskrift-meny
        oppMeny.style.display = oppMeny.style.display === 'flex' ? 'none' : 'flex';
    });

    //klikk utenfor lukker begge menyer
    document.addEventListener('click', function(e) {
        if (!katKnapp.contains(e.target) && !katMeny.contains(e.target)) {
            katMeny.style.display = 'none';
        }

        if (!oppKnapp.contains(e.target) && !oppMeny.contains(e.target)) {
            oppMeny.style.display = 'none';
        }
    });
});