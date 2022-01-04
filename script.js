'use strict'

let id=(id)=>document.getElementById(id);
let classes=(classes)=>document.getElementsByClassName(classes);


let currencyOneE1=id('currency-one'),
amountOneE1=id('amount-one'),
swap=id('swap'),
currencyTwoE1=id('currency-two'),
amountTwoE1=id('amount-two'),
currency=classes('currency');


const calculate=function(){
  const currencyOne=currencyOneE1.value;
  const currencyTwo=currencyTwoE1.value;

const url=`https://open.er-api.com/v6/latest/${currencyOne}`;
fetch(url)
.then((res)=>res.json())
.then((data)=>{
const rate=data.rates[currencyTwo];

amountTwoE1.value=(amountOneE1.value*rate).toFixed(2);
});


};

const calculate2=function(){
  const currencyOne=currencyOneE1.value;
  const currencyTwo=currencyTwoE1.value;

const url=`https://open.er-api.com/v6/latest/${currencyTwo}`
fetch(url)
.then((res)=>res.json())
.then((data)=>{
const rate=data.rates[currencyOne];

amountOneE1.value=(amountTwoE1.value*rate).toFixed(2);
});


};


currencyOneE1.addEventListener('change' ,calculate)



amountOneE1.addEventListener('input',calculate)

currencyTwoE1.addEventListener('change',calculate2)


amountTwoE1.addEventListener('input',calculate2);

swap.addEventListener('click',()=>{
  let temp;
temp=currencyOneE1.value;
currencyOneE1.value=currencyTwoE1.value;
currencyTwoE1.value=temp;
})



// //initially settings
// calculate()
