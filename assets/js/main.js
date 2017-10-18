var ctrl = new ScrollMagic.Controller();

function scrollDown() {
    var offsetTop = document.getElementById('video-block').offsetTop;
    window.scroll({
        top: offsetTop, 
        left: 0, 
        behavior: 'smooth'
    });
}

function resizeLogo() {
    var imgHeight = document.getElementById('title').clientHeight;
    var height = document.getElementById('container').clientHeight * 0.5 + imgHeight + 25;
    var dY = 'translateY(-' + height + 'px)';
    document.getElementById('title').style.transform = dY;
}

function checkEnterArrowPosition() {
    var containerHeight = document.getElementById('container').clientHeight;
    console.log(containerHeight);
    var gap = (document.body.clientHeight - containerHeight) * 0.5;
    console.log(gap);
    if (gap < 134) {
        var bottom = gap - 55;
        document.getElementById('enter').style.bottom = bottom + 'px';
    }
}

var scene = new ScrollMagic.Scene({triggerElement: '', duration: 800})
scene.setTween('#title', { top: '110%',  transform: 'translateY(0)' });
scene.addTo(ctrl);

var scene2 = new ScrollMagic.Scene({triggerElement: '', duration: 800})
scene2.setTween('#title img', { 'max-width': '250px' });
scene2.addTo(ctrl);

window.addEventListener('resize', function() {
    resizeLogo();
    checkEnterArrowPosition();
});

window.addEventListener('load', function() {
    resizeLogo();
    checkEnterArrowPosition();
});