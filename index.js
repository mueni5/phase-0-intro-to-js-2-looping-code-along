// Code your solutions in this file

const { jsdom } = require("jsdom");
const { jQueryify } = require("jsdom");


const gifts =['Guadalupe', 'Ollie', 'Aki'];
function writeCards(){
    const response=[];
    let j;
    for (j=0; j<gifts.length; j++){
        response[js]="Thank you, ${gifts[j]}, for the wonderful surprise gift!"
        
    }
    return response;
}

function countDown() {
    let j=10
    while(j>=0){
        console.log(j--);
    }
    
}
countDown()