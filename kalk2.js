send.addEventListener("click",fnc); 
function fnc(){
    let val_P = P.value;
    let val_Q = Q.value;
    let val_M = M.value;
    let val_result; 
    val_result = ((val_P) *(val_Q))/(val_M) ;
    result.innerHTML = val_result.toFixed(2); 
    