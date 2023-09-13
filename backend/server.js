const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000; // Set the port you want to use

// Serve static files from the 'frontend' directory
app.use(express.static('frontend'));

// Define any additional routes or middleware here if needed

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
