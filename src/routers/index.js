const router = app => {

    app.get('/', (req, res) => {
        res.send('Hello')
      })
      
}
module.exports = router