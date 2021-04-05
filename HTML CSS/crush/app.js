function Unicode(str) {
    return decodeURIComponent(atob(str).split('').map(
        c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    ).join(''));
}

function reject() {
    var x = Math.random() * 500;
    var y = Math.random() * 500;
    var left = x + 'px';
    var top = y + 'px';
    document.getElementById('rejectBtn').style.transform = `translateX(${left})`;
    document.getElementById('rejectBtn').style.transform = `translateY(${top})`;;
}
document.getElementById('rejectBtn').onmouseenter = function() {
    reject();
}

document.getElementById('accepBtn').onclick = function() {
    alert("Yêu cậu ❤️");
    document.querySelector('img').src = 'https://i.pinimg.com/originals/ed/30/02/ed3002fb3b703f38807ddb7da020169d.gif?fbclid=IwAR3-So94fDmoiGn_P0KWRkmjmhto0Qg0UlQ0LixcdzAg9hnphqsF2WUnbao';
}