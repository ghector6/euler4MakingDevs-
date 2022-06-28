var res;
var arr = [];
for (let i = 100; i < 1000; i++) {
    for (let j =100; j < 1000; j++) {
        res = i * j;
        let numStr = res.toString().split("").reverse().join("");
        if (parseInt(numStr) === parseInt(res)){
            let parsedNumStr = parseInt(numStr);
            arr.push(parsedNumStr);
            
        }        
    }   
}
console.log(Math.max(...arr));
