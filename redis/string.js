const client = require("./client")

async function init(){
    
   let result = await client.get('product:2')
   let result2 = await client.set('message:1','hello')
   client.expire("message:1",10)
   console.log(result)
   console.log(result2)
}

init()