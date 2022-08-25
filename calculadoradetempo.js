var button = document.getElementById("Somar").addEventListener("click", imprimir);
var tot_horas = 0;
var tot_min = 0;
var tot_seg = 0;

function imprimir() {

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