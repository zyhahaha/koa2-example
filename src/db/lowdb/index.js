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

module.exports = LowDb
