function carregar(){
var msgi = window.document.getElementById('msg');

var data = new Date();
var hora = data.getHours();
var min = data.getMinutes();
var seg = data.getSeconds();

msgi.innerHTML = 'Hours: '+hora+' hrs ' +min+ ' min e '+seg+' seg'


}
