// $(document).ready(function() {

//     var scene = document.getElementById('scene');

//     var parallax = new Parallax(scene);

//     $('.layer9').attr('id', 'exit');

// });



// let links = document.getElementsByClassName("admin__tab__link");
// // grab p tags
// let tabs = document.getElementsByClassName("admin__tab");

// // bind event handlers in most simple way
// for(let i = 0; i < links.length; i++) {
//     links[i].onclick = function() {
//         hideAllTabs();
//         let link = this;
//         href = link.href;
//         href = href.slice(href.indexOf("#")+1,href.length);
//         document.getElementById(href).style.display = "block";
//     }
// }

// function hideAllTabs(ignoreFirst) {
//     for(let i = 0; i < tabs.length; i++) {
//         if(ignoreFirst && i == 0) continue;
//         tabs[i].style.display = "none";
//     }
// }

// hideAllTabs(true);


$(document).on('click', function(e) {
    if ($(e.target).is('.auth__button')) {
        $('#flip').addClass('flip');
        $('.auth__button').css({ 'opacity': 0 })
    } else if ($(e.target).is('#exit')) {
        $('#flip').removeClass('flip');
        $('.auth__button').css({ 'opacity': 1 });
    } else if ($(e.target).is('#back')) {
        $('#flip').removeClass('flip');
        $('.auth__button').css({ 'opacity': 1 })
    }
});

$('.nav__menu').on('click', function(e) {
    $(this).toggleClass('active');
    $('.nav__list').toggleClass('active');
});

var vertParallax = (function() {
    var bg = $('.bg__block'),
        user = $('.author__block'),
        sectionText = $('.portfolio__block');

    return {

        move: function(block, windowScroll, strafeAmount) {


            var bg = $('.bg__block');

            var strafe = windowScroll / -strafeAmount + '%',
                transformString = 'translate3d(0,' + strafe + ',0)';

            block.css({
                'transform': transformString
            });
        },

        init: function(wScroll) {
            this.move(bg, wScroll, 45);
            this.move(sectionText, wScroll, 10);
            this.move(user, wScroll, 2);

        }
    }
}());


$(window).scroll(function() {

    let wScroll = $(window).scrollTop();

    vertParallax.init(wScroll);

})


$(document).ready(function() {
    $('.arrow__link').click(function(e) {
        e.preventDefault();
        let scrollTarget = $(this).attr('href');
        if ($(scrollTarget).length != 0) {
            $('html, body').animate({ scrollTop: $(scrollTarget).offset().top }, 1500);
        }
    });
});



// admin.addEventListener('click', function() {

//     let checkbox = document.getElementById('checkbox').checked;
//     let radio = document.getElementById('radio-1').checked;
//     let modalBlock = document.querySelector('.modal__block');
//     let modalClose = document.querySelector('.modal__close');

//     if (!(checkbox && radio)) {

//         modalBlock.style.display = 'block';
//         modalClose.addEventListener('click', function() {
//             modalBlock.style.display = 'none';
//         });
//     };
// });






function initMap() {
    var myLatLng = { lat: 59.974181, lng: 30.321228 };
    var styleArray = [{
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [{
            "color": "#444444"
        }]
    }, {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [{
            "color": "#f2f2f2"
        }]
    }, {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "road",
        "elementType": "all",
        "stylers": [{
            "saturation": -100
        }, {
            "lightness": 45
        }]
    }, {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [{
            "visibility": "simplified"
        }]
    }, {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "water",
        "elementType": "all",
        "stylers": [{
            "color": "#61dac9"
        }, {
            "visibility": "on"
        }, {
            "saturation": "0"
        }]
    }]

    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
        scrollwheel: false,
        // Apply the map style array to the map.
        styles: styleArray,
        center: myLatLng,
        zoom: 14
    });
    var image = '../assets/img/map_marker.svg';
    var marker = new google.maps.Marker({
        map: map,
        position: myLatLng,
        icon: image,
        title: 'Привет я здесь!'
    });
};
