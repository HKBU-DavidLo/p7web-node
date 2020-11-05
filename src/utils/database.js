const { MongoClient } = require('mongodb')

const _db = 'maindb'

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_password}@cluster0.ipfgb.${_db}.net/maindb?retryWrites=true&w=majority`

exports.mongoInsertOne = async function (doc) {
    const mongoClient = new MongoClient (uri, { useNewUrlParser: true, useUnifiedTopology: true })

    try {
        await mongoClient.connect()
        await mongoClient.db(_db).collection('messages').insertOne(doc)
    } catch (e) {
        console.error(e)
    } finally {
        await mongoClient.close()
    }
}