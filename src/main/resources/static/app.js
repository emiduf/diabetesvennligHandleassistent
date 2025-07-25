//Kategorier
document.addEventListener('DOMContentLoaded', function() {
    const katKnapp = document.getElementById('kategorier-knapp');
    const katMeny = document.getElementById('kategori-meny');

    katKnapp.addEventListener('click', function(event) {
        event.stopPropagation();
        katMeny.style.display = katMeny.style.display === 'flex' ? 'none' : 'flex';
    });

    //Lukker menyen hvis man klikker utenfor
    document.addEventListener('click', function (e) {
        if (!katKnapp.contains(e.target) && !katMeny.contains(e.target))
            katMeny.style.display = 'none';
    });
});

//Oppskrifter
document.addEventListener('DOMContentLoaded', function() {
    const oppKnapp = document.getElementById('oppskrifter-knapp');
    const oppMeny = document.getElementById('oppskrift-meny');

    oppKnapp.addEventListener('click', function(event) {
        event.stopPropagation();
        oppMeny.style.display = oppMeny.style.display === 'flex' ? 'none' : 'flex';
    })

    //Lukker menyen hvis man klikker utenfor
    document.addEventListener('click', function(e) {
        if (!oppKnapp.contains(e.target) && !oppMeny.contains(e.target)) {
            oppMeny.style.display = 'none';
        }
    });
});