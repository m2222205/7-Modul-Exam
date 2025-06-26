// 1 exercise
let array = ([1,2,2,3,3,3]);
let isUnique = false;
let counter = 0;
for(i = 0; i < array.length; i++){
        if(array[i] !== array[i+1]){
            counter++;
        }
}
console.log(counter);


// 2 exercise
let text = 'salom';
let first = text[0];
first = first.toUpperCase(first);
let sub = text.substring(1, text.length);
let result = first + sub;
console.log(result);


// 3 exercise 
let str = 'level';
let reverse = '';
for(i = str.length-1; i >= 0; i--){
    reverse +=str[i];
}

console.log(reverse);
if(str === reverse){
   console.log("Palindrome");
}
else{
    console.log(" Is Not Palindrome")
}

     
     

