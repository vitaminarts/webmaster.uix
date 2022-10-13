function checkpassword(el)
{
    submit = document.getElementById('submit');
    tempdiv = document.getElementById('tempdiv');
    error = document.getElementById('error');
    errorText = document.getElementById('errorText');
    if(el.value.length >= 6 && submit.disabled)
    {
        submit.disabled = false;
        btndiv = document.getElementsByClassName('button');
        transform= -100;
        btndiv[0].style.cssText = "transform:translateX(-" + transform + "px);transition:.4s ease";
        transform= 0;
        tempdiv.style.display = 'none';

        error.style.cssText = "opacity:0";
        fontsize = 0.7;
        errorText.style.cssText = "font-size:"+fontsize+"rem;";
    }
    else if(el.value.length < 6 && !submit.disabled)
    {
        submit.disabled = true;
        tempdiv.style.display = 'block';
    }
}
transform = 0;
fontsize = 0.7;
function movebutton(el)
{
    btn = document.getElementById('submit');
    btndiv = document.getElementsByClassName('button');
    error = document.getElementById('error');
    errorText = document.getElementById('errorText');
    if(btn.disabled)
    {
        transform += 100;
        btndiv[0].style.cssText = "transform:translateX("+transform+"px);transition:.2s ease";
        error.style.cssText = "opacity:1;";
        errorText.style.cssText = "font-size:"+fontsize+"rem;";
        fontsize+= 0.7;
    }
}