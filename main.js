const totalBill = document.getElementById('bill');
const per = document.getElementById('percentage');
const person = document.getElementById('persons');
const tip = document.querySelector('h1');
const eachTip = document.getElementById('percen');
const finalBill = document.getElementById('final-bill');
const eachTotal = document.getElementById('final');
const button = document.getElementById('btn-calculate');




//Total Bill Each Person
function eachTipHandler() {
    const total = totalBill.value / per.value;
    return Math.round(total / person.value);
}

function tipForEach(){
    eachTip.innerHTML = Number(tip.innerHTML) / Number(person.value);
}

function finalBillHandler(){
    return Number(totalBill.value);
}


function buttonHandler(){
    const total = totalBill.value / per.value;
    tip.innerHTML = total;
    const myTip = eachTipHandler()
    const final = finalBillHandler()
    const isAre = Number(totalBill.value) + Number(tip.innerHTML);
    finalBill.innerHTML = isAre;
    tipForEach();
    eachTotal.innerHTML = isAre /  Number(person.value) ;
   
 }
button.addEventListener('click', buttonHandler);