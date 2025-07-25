//Kategorier
document.addEventListener('DOMContentLoaded', function() {
    const knapp = document.getElementById('kategorier-knapp');
    const meny = document.getElementById('kategori-meny');

    knapp.addEventListener('click', function() {
        meny.style.display = meny.style.display === 'flex' ? 'none' : 'flex';
    });

    //Lukker menyen hvis man klikker utenfor
    document.addEventListener('click', function (e) {
        if (!document.getElementById('kategorier').contains(e.target))
            meny.style.display = 'none';
    });
});

//Oppskrifter
document.addEventListener('DOMContentLoaded', function() {
    const knapp = document.getElementById('oppskrifter-knapp');
    const meny = document.getElementById('oppskrift-meny');

    knapp.addEventListener('click', function() {
        meny.style.display = meny.style.display === 'flex' ? 'none' : 'flex';
    })

    //Lukker menyen hvis man klikker utenfor
    document.addEventListener('click', function(e) {
        if (!document.getElementById('oppskrifter').contains(e.target))
            meny.style.display = 'none';
    });
});