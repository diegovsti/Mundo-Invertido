window.addEventListener('click', function(){
    const audio = document.getElementById('music');
    audio.play();
    audio.volume = 0.2;
});


function switchTheme(){
    document.body.classList.toggle('dark_theme');
    document.body.classList.toggle('light_theme');

    const theme = document.body.classList[0];
    const music = theme === 'light_theme' ? 'normal-world.mpeg' : 'inverted-world.mpeg'

    const audio = document.getElementById('music');
    audio.src = `assets/musics/${music}`;
    audio.play();
    audio.volume = 0.2;
}