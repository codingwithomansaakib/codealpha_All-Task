const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
console.log("✅ server.js started, using express v", require('express/package.json').version);


// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/products', require('./routes/products'));
app.use('/api/orders', require('./routes/orders'));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('✅ MongoDB connected');
    app.listen(process.env.PORT, () =>
        console.log(`🚀 Server running on http://localhost:${process.env.PORT}`)
    );
}).catch(err => console.error('❌ MongoDB connection error:', err));



