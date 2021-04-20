require('dotenv').config({ path: './config.env' })
const express = require('express')
const connectDB = require('./config/db')
const path = require('path')

const postRoutes = require('./routes/postRoutes')

connectDB()

const app = express()

app.use(express.json())
app.use('/api/posts', postRoutes)

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '/client/build')))

	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
	})
} else {
	app.get('/', (req, res) => {
		res.send('API running')
	})
}

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
	console.log(`Server is running on PORT: ${PORT}`)
})
