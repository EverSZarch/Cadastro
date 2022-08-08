var nm = document.getElementById(`txtn`);
var sn = document.getElementById("txts");
var dv = document.getElementById(`butt`);


function cadastro(){
if(nm.value == 0){
    alert("por favor digite o user")
}else if(sn.value.length < 6){
    alert("A senha deve ter no mínimo 6 caracteres")
}else{
    nm.style.display = 'none';
    sn.style.display = 'none';
    dv.innerHTML = `Bem-vindo ,${nm.value}!`
}

}