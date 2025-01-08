const express = require('express')
const app = express()
const port = 3000
const movieRouter = require('./routers/movieRouter')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Server is running')
})

// registrare le rotte books '/api/movies'

app.use('/api/movies', movieRouter)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);

})
