// document.getElementById('svg-start').onclick = function(){
//     var sVg = document.getElementById('svg');
//     document.body.removeChild(sVg);
// }

function removeElement(id) {
    var elem = document.getElementById(id);
    return elem.parentNode.removeChild(elem);
}

removeElement('logo');