$(document).ready(function() {

    var scene = document.getElementById('scene');

    var parallax = new Parallax(scene);

    $('.layer9').attr('id','exit');

});


$(document).on('click', function(e) {
    if ($(e.target).is('.auth__button')) {
        $('#flip').toggleClass('flip');
        $('.auth__button').css({ 'opacity': 0 })
    } else if ($(e.target).is('#exit')) {
        $('#flip').removeClass('flip');
        $('.auth__button').css({ 'opacity': 1 });
    }
})
