var res;
for (let i = 1; i < 10; i++) {
    for (let j =1; j < 10; j++) {
        res = i + j;
        let numStr = res.toString();
        console.log(numStr.split("").reverse().join(""))
        // if (numStr.split("").reverse().join("") === res.toString()){
        //     console.log("here")
        // }
        // console.log(typeof(numStr));
        // if ( res % 2 === 0){
        //     console.log(res)
        }
    }
//}