let cel = document.querySelector('#celsius');
let feh = document.querySelector('#fahrenheit');
let kel = document.querySelector('#kelvin');
let bttn = document.querySelector('#subb');

function roundno(number){
    return Math.round(number*100)/100;
}
cel.addEventListener('input' , function(){
    let ctemp = parseFloat(cel.value);
    let ftemp = (ctemp*(9/5)) + 32;
    let ktemp = ctemp + 273.15;
    feh.value = roundno(ftemp);
    kel.value = roundno(ktemp);
});
feh.addEventListener('input' , function(){ 
    let ftemp = parseFloat(feh.value);
    let ctemp = (ftemp - 32) * (5/9);
    let ktemp = (ftemp - 32) * (5/9) + 273.15;
    cel.value = roundno(ctemp);
    kel.value = roundno(ktemp);
});
kel.addEventListener('input' , function(){
    let ktemp = parseFloat(kel.value);
    let ctemp = ktemp - 273.15;
    let ftemp = (ktemp - 273.15) * (9/5) + 32;
    cel.value = roundno(ctemp);
    feh.value = roundno(ftemp);
});
bttn.addEventListener('click' , ()=>{
    cel.value = "";
    feh.value = "";
    kel.value = "";
})