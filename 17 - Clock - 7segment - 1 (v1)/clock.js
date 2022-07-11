function updateClock()
{
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var h0 = hour,h1 = 0,m0 = min,m1 = 0,s0 = sec,s1 = 0;
    if(hour >= 10)
    {
        h0 = hour % 10;
        h1 = parseInt(hour /10);
    }
    if(min >= 10)
    {
        m0 = min % 10;
        m1 = parseInt(min /10);
    }
    if(sec >= 10)
    {
        s0 = sec % 10;
        s1 = parseInt(sec /10);
    }


    document.getElementById("s0").innerText = s0;
    if(document.getElementById("s1").innerText != s1)
    {
        document.getElementById("s1").innerText = s1;
    }
    if(document.getElementById("m0").innerText != m0)
    {
        document.getElementById("m0").innerText = m0;
    }
    if(document.getElementById("m1").innerText != m1)
    {
        document.getElementById("m1").innerText = m1;
    }
    if(document.getElementById("h0").innerText != h0)
    {
        document.getElementById("h0").innerText = h0;
    }
    if(document.getElementById("h1").innerText != h1)
    {
        document.getElementById("h1").innerText = h1;
    }
}

setInterval(function (){
    updateClock();
},1000);