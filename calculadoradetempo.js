var hms_opcoes = document.getElementById("hms").addEventListener("click", opcoes_hms);
var ms_opcoes = document.getElementById("ms").addEventListener("click", opcoes_ms);
var s_opcoes = document.getElementById("s").addEventListener("click", opcoes_s);


function opcoes_hms() {

    var opcoes = document.getElementById("opcoes");
    opcoes.remove();
    var body = document.body;
    var div = document.createElement("div");
    div.setAttribute("id","insercao");
    var total = document.createElement("div");
    total.setAttribute("id","total");
    var p_horas = document.createElement("p");
    p_horas.innerText = "Horas";
    var input_horas = document.createElement("input");
    input_horas.setAttribute("id","horas");
    var p_min = document.createElement("p");
    p_min.innerText = "Minutos";
    var p_seg = document.createElement("p");
    p_seg.innerText = "Segundos";
    var input_min = document.createElement("input");
    input_min.setAttribute("id","minutos");
    var input_seg = document.createElement("input");
    input_seg.setAttribute("id","segundos");
    var br = document.createElement("br");
    var button = document.createElement("button");
    button.setAttribute("id", "Somar");
    button.innerText = "Somar";

    
    div.appendChild(p_horas);
    div.appendChild(input_horas);
    div.appendChild(p_min);
    div.appendChild(input_min);
    div.appendChild(p_seg);
    div.appendChild(input_seg);
    div.appendChild(br);
    div.appendChild(button);
    body.appendChild(total);
    body.appendChild(div);

    var button = document.getElementById("Somar").addEventListener("click", imprimir_hms);

}
function opcoes_ms() {

    var body = document.body;
    var opcoes = document.getElementById("opcoes");
    opcoes.remove();
    var div = document.createElement("div");
    div.setAttribute("id","insercao");
    var total = document.createElement("div");
    total.setAttribute("id","total");
    var p_min = document.createElement("p");
    p_min.innerText = "Minutos";
    var p_seg = document.createElement("p");
    p_seg.innerText = "Segundos";
    var input_min = document.createElement("input");
    input_min.setAttribute("id","minutos");
    var input_seg = document.createElement("input");
    input_seg.setAttribute("id","segundos");
    var button = document.createElement("button");
    button.setAttribute("id", "Somar");
    button.innerText = "Somar";
    var br = document.createElement("br");

    div.appendChild(p_min);
    div.appendChild(input_min);
    div.appendChild(p_seg);
    div.appendChild(input_seg);
    div.appendChild(br);
    div.appendChild(button);
    body.appendChild(total);
    body.appendChild(div);

    var button = document.getElementById("Somar").addEventListener("click", imprimir_ms);
    
}
function opcoes_s() {

    var body = document.body;
    var opcoes = document.getElementById("opcoes");
    opcoes.remove();
    var div = document.createElement("div");
    div.setAttribute("id","insercao");
    var total = document.createElement("div");
    total.setAttribute("id","total");
    var p_seg = document.createElement("p");
    p_seg.innerText = "Segundos";
    var input_seg = document.createElement("input");
    input_seg.setAttribute("id","segundos");
    var button = document.createElement("button");
    button.setAttribute("id", "Somar");
    button.innerText = "Somar";
    var br = document.createElement("br");

    div.appendChild(p_seg);
    div.appendChild(input_seg);
    div.appendChild(br);
    div.appendChild(button);
    body.appendChild(total);
    body.appendChild(div);

    var button = document.getElementById("Somar").addEventListener("click", imprimir_s);

}

var tot_horas = 0;
var tot_min = 0;
var tot_seg = 0;

function imprimir_hms() {

    var horas = Number(document.getElementById("horas").value);
    var min = Number(document.getElementById("minutos").value);
    var seg = Number(document.getElementById("segundos").value);
    tot_seg += seg;
    while (tot_seg >= 60) {
        tot_min += 1;
        tot_seg -= 60;
    }
    tot_min += min;
    while(tot_min >= 60) {
        tot_horas += 1;
        tot_min -= 60;
    }
    tot_horas += horas;
    var total_html = document.getElementById("total");
    var tempo_total = `${tot_horas}h ${tot_min}min ${tot_seg}seg`
    total_html.innerHTML = tempo_total;
    document.getElementById("horas").value = '';
    document.getElementById("minutos").value = '';
    document.getElementById("segundos").value = '';
    
} 
function imprimir_ms() {

    var min = Number(document.getElementById("minutos").value);
    var seg = Number(document.getElementById("segundos").value);
    tot_seg += seg;
    while (tot_seg >= 60) {
        tot_min += 1;
        tot_seg -= 60;
    }
    tot_min += min;
    while(tot_min >= 60) {
        tot_horas += 1;
        tot_min -= 60;
    }
    var total_html = document.getElementById("total");
    var tempo_total = `${tot_horas}h ${tot_min}min ${tot_seg}seg`
    total_html.innerHTML = tempo_total;
    document.getElementById("minutos").value = '';
    document.getElementById("segundos").value = '';
    
}
function imprimir_s() {

    var seg = Number(document.getElementById("segundos").value);
    tot_seg += seg;
    while (tot_seg >= 60) {
        tot_min += 1;
        tot_seg -= 60;
    }
    while(tot_min >= 60) {
        tot_horas += 1;
        tot_min -= 60;
    }
    var total_html = document.getElementById("total");
    var tempo_total = `${tot_horas}h ${tot_min}min ${tot_seg}seg`
    total_html.innerHTML = tempo_total;
    document.getElementById("segundos").value = '';
    
}