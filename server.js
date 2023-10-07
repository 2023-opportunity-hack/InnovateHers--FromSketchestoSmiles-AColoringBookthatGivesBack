const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});

const schoolsRoutes = require('./schools');
const sponsorsRoutes = require('./sponsors');
const uploadsRoutes = require('./uploads');

// Middleware to use the routes
app.use('/schools', schoolsRoutes);
app.use('/sponsors', sponsorsRoutes);
app.use('/uploads', uploadsRoutes);

app.use(express.static(path.join(__dirname, 'public')));