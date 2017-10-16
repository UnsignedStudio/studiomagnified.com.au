var animated = false;

function toggleSite() {
    if (animated) {
        document.getElementById('bar').className = '';
        document.getElementById('title').className = '';
        document.getElementById('container').className = '';
        document.getElementById('info').className = '';
        document.getElementById('enter').className = '';
        document.getElementById('video-container').className = 'hide';
        document.getElementById('video').className = '';
        document.getElementById('footer').className = 'hide';
        document.getElementById('title-link').className = 'hide';
    } else {
        document.getElementById('bar').className = 'hide';
        document.getElementById('title').className = 'animate';
        document.getElementById('container').className = 'animate';
        document.getElementById('info').className = 'hide';
        document.getElementById('enter').className = 'animate';
        document.getElementById('video-container').className = 'animate';
        document.getElementById('video').className = 'animate';
        document.getElementById('footer').className = 'animate';
        setTimeout(function() {
            document.getElementById('title').className = 'hide';
            document.getElementById('enter').className = 'hide';
            document.getElementById('title-link').className = 'show';
        }, 1000)
    }
    animated = !animated;
}