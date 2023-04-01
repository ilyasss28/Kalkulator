let result = document.getElementById('screen');

function input(a){
    result.value += a;
}
 
const insert = (a) =>{
    if (a == 'clear') {
        result.value = ''
    } else if (a == 'del') {
        result.value =  result.value.slice(0,-1)
    } else if (a == 'action') {
        try{
            result.value = eval(result.value)
        } catch(error){
            alert('Maaf Silahkan Masukan Perintah Aritmatika Dengan Benar')
        }
    } else {
        result.value += a
    } 
}