const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const {mergePdfs} = require('./merge')

app.use('/static', express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.post('/merge', upload.array('pdfs', 2), async (req, res, next)=> {
    let d = await mergePdfs(path.join(__dirname , req.files[0].path), path.join(__dirname , req.files[1].path))
    console.log(req.files);
    res.redirect(`http://localhost:3000/static/${d}.pdf`)
    // console.log({"data": res.files})
    
  // req.files is array of `photos` files
  // req.body will contain the text fields, if there were any
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})