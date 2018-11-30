document.addEventListener("keydown", function(event) {
    if (event.keyCode != 123) {
        return false;
    }
    var player = document.createElement("audio");
    player.style = "display:none";
    player.volume = 1;
    document.body.appendChild(player);
    player.src = "https://dzjlb.top/pan/urusai/urusai-1.ogg";
    player.play();
    var i=1;
    player.addEventListener("ended",function(){
        if(i<3) {
    i++;
    player.src = "https://dzjlb.top/pan/urusai/urusai-" + i + ".ogg";
    player.play();
        }
        else{return false;}
    })
})
//Credit to: https://api.ifdream.net/project/hh/dontpressf12.js