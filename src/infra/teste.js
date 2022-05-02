async function teste(){
    let promise =new promise((resolve,reject)=>{
        setTimeout (()=> resolve("done!"),2000)
    });
    let result = await promise;
    comsole.log(result);
    }
    teste();