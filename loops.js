function forLoop(array){
for (i = 0; i < 25; i++) {
if(i===1){
array.push("I am 1 strange loop.");
} else {
console.log("I am ${i} strange loop.");
}
}
return array;
}