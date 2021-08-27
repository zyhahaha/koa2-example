const { Low, JSONFile } = require('../../utils/lowdb/index.js')

const file = new JSONFile('db.json')
const db = new Low(file)

module.exports = db
