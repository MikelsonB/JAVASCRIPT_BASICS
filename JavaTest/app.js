// exo1
// function arrayFromRange(min,max){
//     let array=[];
    
//     for(let i=min;i<=max;i++){
//     array[i]=min+i;
//     }
// console.log(array);

// }


// arrayFromRange(0,10);

// exo2
// function except(array,excludead){
//     if (array.includes(excludead)){

//     return array.filter(n=> n!==excludead);
    
// }else console.log("not found");
// }
// array2=[1,2,3,4,4,1];
// console.log(except(array2,1));

// exo3
// const numbers = [1, 2, 3, 4, 5, 6];

// function move(array,index,offset){
//     if(index < array.length && offset>=0 && index+offset < array.length){

//     array.splice(index+offset+1,0,array[index]);
//     array[index]=undefined;
//     return array.filter(n=> n!==undefined);


//     } else console.error("invalid index or offset");



// }
// console.log(move(numbers,2,1));

// exo4

function occurenceCount(array,searchElement){
    return array.reduce((accumulation,currentValue)=> {
        if(currentValue==searchElement) { ++accumulation}},0);
       
 
 }

let numbers = [1, 2, 3, 4, 5, 1];
console.log (occurenceCount(numbers,1)
);