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

var scene = new ScrollMagic.Scene({triggerElement: '', duration: 800})
scene.setTween('#title', { top: '110%',  transform: 'translateY(0)', 'max-width': '250px' });
scene.addTo(ctrl);

resizeLogo();
window.addEventListener('resize', function() {
    resizeLogo();
});