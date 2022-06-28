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
        // console.log(numStr.split("").reverse().join(""))
        // if (numStr.split("").reverse().join("") === res.toString()){
        //     console.log("here")
        // }
        // console.log(typeof(numStr));
        // if ( res % 2 === 0){
        //     console.log(res)
        }
    }
//}
console.log(Math.max(...arr));