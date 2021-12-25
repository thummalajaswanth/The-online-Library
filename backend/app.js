const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser")
const cors = require('cors')
require('dotenv/config')

//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(cookieParser());

// Import Routes
const bookRoutes = require('./routes/books')
const serviceRoutes = require('./routes/services')
const userRoutes = require('./routes/users')
const authRoutes = require('./routes/auth')
const libraryRoutes = require('./routes/library')
const adminRoutes = require('./routes/admin')

app.use('/books', bookRoutes)
app.use('/services', serviceRoutes)
app.use('/users', userRoutes)
app.use(authRoutes)
app.use(libraryRoutes)
app.use('/admin', adminRoutes)

// ROUTES
app.get('/', (req, res) => {
    res.send('We are on home');
})

// Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => {
        console.log('Connected to DB!')
    }
);

app.listen(5000, () => {
    console.log('Listening on Port 5000!');
});



