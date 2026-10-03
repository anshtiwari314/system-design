const client = require("./client")

async function init(){
    
   let result = await client.lpush('messages','hello4')
   let result2 = await client.rpush('messages','hello5')
   let result3 = await client.rpush('messages','hello6')
   let result4 = await client.rpush('messages','hello7')
   let result5 = await client.rpop('message')
   let result6 = await client.lpop('message')

   console.log(result)
   console.log(result2)
}

init()