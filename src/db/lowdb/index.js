const { Low, JSONFile } = require('../../utils/lowdb/index.js')

class LowDb {
    constructor(tableName){
        const file = new JSONFile(`./_cache/${tableName}.json`)
        this.dbInstance = new Low(file)
    }
    async insert(data){
        await this.dbInstance.read()
        this.dbInstance.data = this.dbInstance.data || []
        this.dbInstance.data.push(data)
        await this.dbInstance.write()
        return this.dbInstance.data
    }
    async query(data){
        await this.dbInstance.read()
        return this.dbInstance.data
    }
}

// async function test() {
//     await db.read()
//     db.data = db.data || { posts: [] }
//     db.data.posts.push('hello world')
//     db.data.posts[0]

//     // You can also use this syntax if you prefer
//     const { posts } = db.data
//     posts.push('hello world')

//     // Write db.data content to db.json
//     await db.write()
// }
// test()

module.exports = LowDb
