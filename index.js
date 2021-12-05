let a = function(param){
    let b = function(param1){
        let c = function(param2){
            let sum = param+param1+param2;
            console.log(sum)
        }
        return c;
    }
    return b;
}
a(10)(4)(15);