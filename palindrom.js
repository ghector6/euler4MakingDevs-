var res;
for (let i = 10; i < 100; i++) {
    for (let j =10; j < 100; j++) {
        res = i * j;
        let numStr = res.toString().split("").reverse().join("");
        if (parseInt( numStr) === res){
            console.log(`${i} * ${j} => ${Math.max(numStr)}`)
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