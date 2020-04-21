const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/mistore', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
const db = mongoose.connection;
db.on('open', () => {
  console.log('连接数据库成功！')
})

db.on('error', () => {
  console.log('数据库连接失败！')
})
module.exports = db