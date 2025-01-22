const express = require('express')
const app = express()

const path = require('path');

//父文件夹的根路径
let parentPath = path.resolve(__dirname, '..'); 
//静态资源路径
let staticPath = parentPath + '/dist';

app.use(express.static(staticPath))

//监听端口
app.listen(9991, () => {
  console.log('Listening on port 9991')
})