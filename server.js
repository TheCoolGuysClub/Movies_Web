const express = require('express');
const hbs = require('hbs');
const axios = require('axios');


const app = express();


var port = process.env.PORT || 3000;
app.set('views', __dirname + "/views");
app.set('view engine', 'hbs')

app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
  res.render('index');
})

// npm run start
// The start function in package.json should be created manually by each user.
app.get('/movie_info', (req, res) => {
  const title = req.query.title;
  const api_key = process.env.API_KEY;
  axios.get(`http://omdbapi.com/?apikey=${api_key}&t=${title}`)
    .then ((response) => {
      const poster = response.data.Poster;
      res.send({poster});
    })
    .catch ((response) => {
      console.log(reponses);
      res.send({});
    })
})

app.listen(port, () => {
  console.log("Listening on port " + port);
})
