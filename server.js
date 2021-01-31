require('dotenv').config({ path: './config.env' });
const express = require('express');
const connectDB = require('./config/db');

const postRoutes = require('./routes/postRoutes');

connectDB();

const app = express();

app.use(express.json());
app.use('/api/posts', postRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server is running on PORT: ${PORT}`);
});
