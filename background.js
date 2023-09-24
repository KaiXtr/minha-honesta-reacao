var url = new URLSearchParams(window.location.search);
var watch = url.get('v');

function trocarPosicao(){
    if (this.style.float == "left"){
        this.style.float = "right";
        this.style.left = "0px";
        this.style.right = "10px";
    }else{
        this.style.float = "left";
        this.style.left = "10px";
        this.style.right = "0px";
    }
}
function adicionarReact(){
    var el = document.getElementById("minha-honesta-reacao-thumb")
    if (el != null) {
        el.remove();
    }

    var r = [
        "https://media.giphy.com/media/NCv3udz97e9e243Oon/giphy.gif",
        "https://c.tenor.com/wdAvNRoakY0AAAAM/smzinho.gif",
        "https://media.tenor.com/icI4DNrzcCsAAAAM/cellbit-ordem-paranormal.gif",
        "https://media.tenor.com/h__YJHEqvPUAAAAC/orochinho.gif",
        "https://media.tenor.com/sV40ZMNzZO0AAAAC/felca.gif",
        "https://media.tenor.com/Xv48OmHqqToAAAAi/lucas-rossi-feuersch%C3%BCtte-observando.gif",
        "https://media.tenor.com/Hy3-6i-tqvkAAAAC/bebendo-luba.gif",
        "https://media.tenor.com/J5UT_OR7pyMAAAAd/jovem-maicon-kuster.gif",
        "https://media.giphy.com/media/OpW1g8ZUYSO7SPM6eb/giphy.gif",
        "https://media.giphy.com/media/OpW1g8ZUYSO7SPM6eb/giphy.gif",
        "https://media.tenor.com/Gqc4Cut4jmMAAAAd/defante.gif",
        "https://media.tenor.com/P8YJVGV0UH4AAAAd/inutilismo-lucas-inutilismo.gif",
        "https://media.tenor.com/vhjWgwedjeMAAAAC/friday-short.gif",
        "https://media.tenor.com/uv_Ps5Z2kQIAAAAd/jerma-jerma985.gif",
        "https://media.tenor.com/M9VdlWC3di4AAAAC/live-reaction-kick.gif",
        "https://media.tenor.com/36nCRb6St48AAAAC/live-reaction-hims.gif",
        "https://media.tenor.com/YUo9TqxYo0IAAAAC/speed-ishowspeed.gif",
        "https://media.tenor.com/My4V2sdwB1YAAAAd/ishowspeed-speed.gif",
        "https://media.tenor.com/8s-8TBPVZrUAAAAd/alanzoka1.gif",
        "https://media.tenor.com/LRALXdKY-EoAAAAd/alan-alanzoca.gif",
        "https://media.tenor.com/ad-SI1q5Y8IAAAAd/o-segredo-na-floresta-calango.gif",
        "https://media.tenor.com/pMhSj9NfCXsAAAAd/saul-goodman-better-call-saul.gif",
        "https://media.tenor.com/ai2PtGiJ-z8AAAAd/elis-debochada.gif",
        "https://media.tenor.com/rHwrtl0ickEAAAAC/wylho-meme.gif",
        "https://media.tenor.com/2HID28ywVWcAAAAC/wylho-humor.gif",
        "https://media.tenor.com/a1MiXLBDhFUAAAAd/joelma-calypso.gif",
        "https://media.tenor.com/fNpz9aB90YQAAAAd/sinal-do-ronaldinho-ronaldinho.gif",
        "https://media.tenor.com/X329ngk9t9MAAAAd/caue-moura-desce-a-letra.gif",
        "https://media.tenor.com/3RQ7lUa5TQsAAAAC/silly-face-goofy-face.gif",
        "https://media.tenor.com/xCc58fEqFREAAAAd/nerd-nerdy.gif",
        "https://media.tenor.com/IVh7YxGaB_4AAAAC/nerd-emoji.gif",
        "https://media.tenor.com/-W5WEdhV5yIAAAAC/live-tucker.gif",
        "https://media.tenor.com/NL92nTKCa-EAAAAd/reaction-mark.gif",
        "https://media.tenor.com/GS9aWHsk4dsAAAAd/fernando-alonso-live-fernando-reaction.gif",
        "https://media.tenor.com/RP_qoKH85xgAAAAd/the-rock-sus-the-rock-meme.gif",
        "https://media.tenor.com/FaG9mw1XmjwAAAAd/the-rock-the.gif",
        "https://media.tenor.com/gWGftuEIEHkAAAAd/my-honest-reaction-honest.gif",
        "https://media.tenor.com/2P52PxEhROwAAAAd/tucker-carlson-tucker-reaction.gif",
        "https://media.tenor.com/gEnbODKPISQAAAAd/cat-water-my-reaction-to-that-information.gif",
        "https://media.tenor.com/RsdEV8lo11UAAAAC/eric-andre-cry.gif",
        "https://media.tenor.com/fVvld5d_mocAAAAC/eric-andre.gif",
        "https://media.tenor.com/NjkNrMQnJd4AAAAC/wack-eric.gif",
        "https://media.tenor.com/4ZlmebXLXXgAAAAC/tyler-the.gif",
        "https://media.tenor.com/F6LAvKaWf6QAAAAd/tyler-the-creator-crying.gif",
        
    ];
    var f = ["left","right"];

    var gif = document.createElement("img");
    gif.id = "minha-honesta-reacao-thumb"
    gif.src = r[Math.floor(Math.random() * r.length)];

    gif.style.float = f[Math.floor(Math.random() * f.length)];
    if (gif.style.float == "left"){
        gif.style.left = "10px";
    }else{
        gif.style.right = "10px";
    }

    gif.style.width = "20%";
    gif.style.position = "relative";
    gif.style.verticalAlign = "top";
    gif.style.top = "40px";
    gif.style.zIndex = "100";
    gif.style.boxShadow = "0px 0px 5px black";
    gif.addEventListener("mouseenter",trocarPosicao);

    var el = document.getElementById("player-container-outer");
    el.insertBefore(gif,el.firstChild);

    //var el = document.getElementById("player-full-bleed-container");
    //gif.style.width = "10%";

    el.insertBefore(gif,el.firstChild);
}
window.addEventListener("yt-navigate-finish",adicionarReact);
setInterval(adicionarReact,120 * 1000);
adicionarReact();