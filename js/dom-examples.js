
var motto = document.getElementById("motto");

function changeMottoColor() {
    motto.style.comlor='red';
    motto.style.fontSize = '1.7em'
}
motto.onclick = changeMottoColor;

var skills = ['HTML' , 'CSS' , 'JS' , 'DHTML' , 'PHP'];

var greetings = '';

for(var i = 0; i < skills.length; i++){
    greetings = greetings + 'Felicitari pentru ' + skills[i] + ' ';
}

motto.innerHTML = greetings;

var topMenu = document.getElementById('top-menu');
var topMenuLinks = topMenu.getElementsByTagName('a');

function changeTitle(title) {
    document.getElementById('breadcrumb').innerHTML = title;
}
    for(var i = 0; i < topMenuLinks.length; i++) {
    topMenuLinks[i].onclick = function () {
        console.info('clicked on link', this);
        changeTitle(this.innerHTML);
        return false;
    };
}