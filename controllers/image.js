const Clarifai = require('clarifai');
// const CLARIFAI_API_KEY = require('../apiKey');

const app = new Clarifai.App({
  apiKey: '2d8a2d1768104d979eb56aad39e9a633'
});


 // Clarifai.FACE_DETECT_MODEL
  // `c0c0ac362b03416da06ab3fa36fb58e3`
  // "d02b4508df58432fbb84e800597b8959"
const handleApiCall = (req, res) => {
  app.models
    .predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
    .then(data => {
      res.json(data);
    })
    .catch(err => res.status(400).json('unable to work with API'))
}


const handleImage = (req, res, db) => {
  const { id } = req.body;
  db('users').where('id', '=', id)
  .increment('entries', 1)
  .returning('entries')
  .then(entries => {
    res.json(entries[0]);
  })
  .catch(err => res.status(400).json('unable to get entries'))
}

module.exports = {
  handleImage,
  handleApiCall
}