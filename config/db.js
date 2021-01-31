const mongoose = require('mongoose');

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: true,
		});

		console.log('Database Connected');
	} catch (error) {
		console.log('Database Connection Failed');
		process.exit(1);
	}
};

module.exports = connectDB;
