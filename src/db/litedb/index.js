const { Low, JSONFile } = require(global._DirRoot + '/src/utils/litedb/index.js')

class LiteDB {
    constructor(tableName){
        const file = new JSONFile(`${global._DirRoot}/_cache/${tableName}.json`)
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

module.exports = LiteDB
