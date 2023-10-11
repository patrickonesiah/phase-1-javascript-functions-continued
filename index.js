// code your solution here
function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`
}
function mondayWork(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
}
function wrapAdjective(special ='*'){
    return function(msg){
        return `You are ${special}${msg}${special}!`
    }
}
console.log(wrapAdjective("%")("a dedicated programmer"))
// wrapAdjective("%")("a dedicated programmer"); //=> "You are %a dedicated programmer%!"

// function demoChain(name) {
//     const part1 = "hi";
//     return function () {
//       const part2 = "there";
//       return function () {
//         console.log(`${part1.toUpperCase()} ${part2} ${name}`);
//       };
//     };
//   }