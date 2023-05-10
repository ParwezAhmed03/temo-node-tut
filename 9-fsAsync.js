const {readFileSync,writeFileSync}=require('fs')
console.log('start');
readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    const first = result
    readFile('./content/first.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err);
            return
        }
        const second = result
    writeFile(
        './content/result-sync.txt',`here is the result${fisrt},${second}`,(err,result)=>{
            if(err){
                console.log(err);
                return
            }
            console.log('done with this task');
        })
    })
})
console.log('starting the new task');