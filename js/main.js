var scene;
var init = function(){
    scene =document.querySelector('#scene');
};

window.onload = function(){
    init();
    
}

window.onmousemove = function(e){
    var dx =window.innerWidth / 2 - e.pageX;
    var s ='rotateY('+dx+'deg)';
    scene.style['-webkit-transform'] = s;

};