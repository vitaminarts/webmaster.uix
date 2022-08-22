var time = 60;
var play = false;
function increase()
{
    if(time < 500)
        time++;
    updatetime(time);
}
function decrease()
{
    if(time > 15)
        time--;
    updatetime(time);
}
function range(val)
{
    if(val >= 15 && val <= 500)
    {
        time = val
        updatetime(time);
    }
}
function updatetime(time)
{
    document.getElementById('time').innerText = time;
    metronome(1);
}


var firstAudio = new Audio("audio/first.mp3");
var otherAudio = new Audio("audio/other.mp3");
var pps = 4;
var cpps = 0;
var playAudio;

function metronome(reset = 0)
{
    if(reset == 1 && play == true)
    {
        clearInterval(playAudio);
        play = false;
    }
    if(play == false)
    {
        play = true;
        var s = (60 / time) * 1000;
        playAudio = window.setInterval(function (){
            if(cpps % pps == 0)
            {
                firstAudio.play();
            }
            else
            {
                otherAudio.play();
            }
            cpps++;
            if(cpps == pps)
                cpps = 0;
        },s);
        document.getElementById('play').innerHTML = '<i class="icofont-pause befor-color-blue"></i>';
    }
    else
    {
        play = false;
        document.getElementById('play').innerHTML = '<i class="icofont-play-alt-1"></i>';
        clearInterval(playAudio);
    }
}


function changePPS(el)
{
    var btns = document.getElementsByClassName('timeBtn');
    for(var i = 2; i < btns.length; i++)
    {
        btns[i].classList.remove('selected');
    }
    el.classList.add('selected');
    pps = parseInt(el.innerText);
    metronome(1);
}



