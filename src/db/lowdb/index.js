const { Low, JSONFile } = require('../../utils/lowdb/index.js')

const file = new JSONFile('./database_cache/db.json')
const db = new Low(file)

async function test() {
    await db.read()
    db.data = db.data || { posts: [] }
    db.data.posts.push('hello world')
    db.data.posts[0]

    // You can also use this syntax if you prefer
    const { posts } = db.data
    posts.push('hello world')

    // Write db.data content to db.json
    await db.write()
    }
test()

module.exports = db
