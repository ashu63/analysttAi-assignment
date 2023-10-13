const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Enable CORS for all routes
app.use(cors());



// route to fetch data from a public API

app.get('/covidData', async (req, res) => {
  try {
      // Data of countries
    const response = await axios.get(`https://disease.sh/v3/covid-19/countries`); 
    const data = response.data;
    res.json(data);
    // console.log(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});


app.get('/covidDataCombine', async (req, res) => {
  try {
      // combine data of all countries
      
    const response = await axios.get('https://disease.sh/v3/covid-19/all'); 
    const data = response.data;
    res.json(data);
    // console.log(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
