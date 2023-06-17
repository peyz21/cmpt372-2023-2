const uri = "mongodb+srv://root/?retryWrites=true&w=majority"

var MongoClient = require('mongodb').MongoClient;

(async ()=>{
    let client = await MongoClient.connect(uri, { useNewUrlParser:true, useUnifiedTopology:true})
    let db = client.db('cmpt372')
    const docs = db.collection("documents")
    const res = await docs.updateOne({a:1},{$set: {n:"bobby"}},{upsert:true})
    const cur = docs.find()
    await cur.forEach(element => {
        console.log(element)
    })
    client.close()
    process.exit()
})().catch(err => {console.error(err)})
