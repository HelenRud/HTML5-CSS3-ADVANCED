window.onload = function () {
    var $ = function (id) { return document.getElementById(id); }
    // var btnArr = [ $('tr1'),  $('tr2'),  $('tr3')];
    // var srcArr = ['video/Trailer_1.mp4', 'video/Trailer_2.mp4', 'video/Trailer_3.mp4'];
    var playback = $('video');
    var sound = true;
 
    var currentVol = 1;
    var lastPlay = {};
    var lastPlayback = {};
    document.querySelector('#play_pause > img').src = "img/play.png";
    window.onbeforeunload = function () {
        lastPlay.lastTime = playback.currentTime;
        lastPlay.video = playback.src;
        localStorage.setItem('lastPlayback', JSON.stringify(lastPlay));
    }

    var lastPlayback = JSON.parse(localStorage.getItem('lastPlayback'));
    if (lastPlayback.video == "") {
        playback.poster = "img/play.png";
    } else playback.poster = "img/secondPoster.png";

//    for(var i=0; i<btnArr.length; i++){
//        btnArr[i].addEventListener('click', startPlayback);
//    }
    
   
//     function startPlayback(srcPl) {
//         pl = true;
//         document.querySelector('#play_pause > img').src = "img/pause.png";
//         playback.src = '';
//         playback.src = srcPl.target.i;
//         playback.play();
//         currentVol = playback.volume;
//     }


    $('tr1').addEventListener('click', startPlayback1);
    function startPlayback1() {
        pl = true;
        document.querySelector('#play_pause > img').src = "img/pause.png";
        playback.src = '';
        playback.src = "video/Trailer_1.mp4";
        playback.play();
        currentVol = playback.volume;
    }
    $('tr2').addEventListener('click', startPlayback2);
    function startPlayback2() {
        pl = true;
        document.querySelector('#play_pause > img').src = "img/pause.png";
        playback.src = '';
        playback.src = "video/Trailer_2.mp4";
        playback.play();
        currentVol = playback.volume;
    }
    $('tr3').addEventListener('click', startPlayback3);
    function startPlayback3() {
        pl = true;
        document.querySelector('#play_pause > img').src = "img/pause.png";
        playback.src = '';
        playback.src = "video/Trailer_3.mp4";
        playback.play();
        currentVol = playback.volume;
    }
    $('play_pause').addEventListener('click', function () {
        if (!playback.paused) {
            playback.pause();
            document.querySelector('#play_pause > img').src = "img/play.png";
        }
        else {
            playback.src = lastPlayback.video;
            playback.currentTime = lastPlayback.lastTime;
            playback.play();
            document.querySelector('#play_pause > img').src = "img/pause.png";
        }
    });
    $('f-r').onclick = function () {
        playback.currentTime -= 2;
    }
    $('f-l').onclick = function () {
        playback.currentTime += 2;
    }
    $('s-l').onclick = function () {
        if (playback.volume <= 0.2) {
            document.querySelector('#sound > img').src = "img/s-n.png";
            sound = false;
        }
        playback.volume -= 0.1;
        currentVol = playback.volume;
    }
    $('s-r').onclick = function () {
        sound = true;
        document.querySelector('#sound > img').src = "img/s.png";
        playback.volume += 0.1;
        currentVol = playback.volume;
    }
    $('sound').onclick = function () {
        if (sound) {
            document.querySelector('#sound > img').src = "img/s-n.png";
            playback.volume = 0;
            sound = false;
        } else {
            document.querySelector('#sound > img').src = "img/s.png";
            sound = true;
            playback.volume = currentVol;
        }
    }

}