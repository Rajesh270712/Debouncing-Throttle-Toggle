function toggler(...arguments){
    let args= arguments;
    let count=0;

    return ()=>{
        if(count==undefined) count=0;
        return args[count++]
    }

}

const toggle = toggler(1,2,3);

console.log(toggle());
console.log(toggle());
console.log(toggle());