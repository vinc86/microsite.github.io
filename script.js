var modal = document.getElementById('myModal');
var trigger = document.getElementById('trigger');
var close = document.getElementById("close");
var main = document.getElementById('main');

trigger.onclick = function(){
    modal.style.display="block";
    trigger.style.display="none";
    main.style.background="rgba(0,0,0,0.4)";
}

close.onclick = function(){
    modal.style.display="none";
    trigger.style.display="block";
    main.style.background="#fff";
}
