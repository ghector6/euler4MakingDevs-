var res;
var arr = [];
for (let i = 1; i < 10; i++) {
    for (let j =1; j < 10; j++) {
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
console.log(arr)