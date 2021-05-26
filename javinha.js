function teste(){
    document.getElementById('body').style.backgroundColor = 'red'
}
function antiTeste(){
    document.getElementById('body').style.backgroundColor = '#d4f7f8'
}



let allSeries = ['Breaking Bad', 'Brookling99', 'The Boys'];

function addSerie(){
    let txt, serie;
    
    if(document.getElementById('newSerie').value != ''){
         serie = document.getElementById('newSerie').value;
         allSeries.push(serie);
    }

    txt = ''
    for( i=0; i<allSeries.length; i++){
        txt += "<li>"+allSeries[i]+"<div id='avaliation'><a href='#3stars_"+allSeries[i]+"' id='three' onclick='teste()'> &#11088</a><a href='#2stars_"+allSeries[i]+"' id='two' onclick='antiTeste()'> &#11088</a><a href='#1stars_"+allSeries[i]+"' id='one'> &#11088</a></div></li>";
    }

    document.getElementById('containerToNewSeries').innerHTML = txt;
}

function setClock(){
    var dat = new Date();
    var hourTxt = dat.getHours() + ':' + dat.getMinutes() + ':' + dat.getSeconds(); 
    var oq = document.getElementsByClassName('relogio');
    oq[0].innerText = hourTxt;
}
setInterval(setClock, 1000);