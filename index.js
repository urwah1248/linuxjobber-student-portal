// let q1yes = document.getElementById('q1yes');
// let q2yes = document.getElementById('q2yes');
// let q3yes = document.getElementById('q3yes');
// let q1no = document.getElementById('q1no');
// let q2no = document.getElementById('q2no');
// let q3no = document.getElementById('q3no');
let q1yes = document.getElementsByClassName('q1yes')


document.querySelector('form').addEventListener("submit", function(event){
    event.preventDefault();
    console.log('prevented submit');
});

document.getElementById('q1yes').addEventListener("click", function(){
});
