const express = require('express');
const connectDB = require('./config/connectdb');
const ContactRouter = require('./route/contact');
const app = express();
const port = 4004;




connectDB();
app.use(express.json());
app.use('/api/contacts', ContactRouter);



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
} );

