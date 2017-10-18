var ctrl = new ScrollMagic.Controller();

function scrollDown() {
    var offsetTop = document.getElementById('video-block').offsetTop;
    /*window.scroll({
        top: offsetTop, 
        left: 0, 
        behavior: 'smooth'
    });*/
    $('html, body').animate({
        scrollTop: offsetTop
    }, 800);
}

function resizeLogo() {
    var imgHeight = document.getElementById('title').clientHeight;
    var height = document.getElementById('container').clientHeight * 0.5 + imgHeight + 25;
    var dY = 'translateY(-' + height + 'px)';
    document.getElementById('title').style.transform = dY;
}

function checkEnterArrowPosition() {
    var containerHeight = document.getElementById('container').clientHeight;
    var gap = (document.body.clientHeight - containerHeight) * 0.5;
    if (gap < 134) {
        var bottom = gap - 55;
        document.getElementById('enter').style.bottom = bottom + 'px';
    }
}

var scene = new ScrollMagic.Scene({triggerElement: '', duration: 1000})
scene.setTween('#title', { top: '40px',  transform: 'translateY(0)' });
scene.addTo(ctrl);

var scene2 = new ScrollMagic.Scene({triggerElement: '', duration: 800})
scene2.setTween('#title img', { 'max-width': '250px' });
scene2.addTo(ctrl);

var scene3 = new ScrollMagic.Scene({triggerElement: '', duration: 600})
scene3.setTween('#container', { 'opacity': '0' });
scene3.addTo(ctrl);

var scene4 = new ScrollMagic.Scene({triggerElement: '', duration: 600})
scene4.setTween('#enter', { 'opacity': '0' });
scene4.addTo(ctrl);

window.addEventListener('resize', function() {
    resizeLogo();
    checkEnterArrowPosition();
});

window.addEventListener('load', function() {
    resizeLogo();
    checkEnterArrowPosition();
});