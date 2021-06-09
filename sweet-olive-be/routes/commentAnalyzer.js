const {google} = require('googleapis');
const express = require("express");

API_KEY = 'AIzaSyApyintKw-tAnLSkltfLrLGNAwx7VsRPqE';
DISCOVERY_URL =
    'https://commentanalyzer.googleapis.com/$discovery/rest?version=v1alpha1';

const router = new express.Router()

router.post("/", async function(req, res, next){
  let content = req.body.comment;
  let score = 0
  console.log(content)
  console.log("in the router")

  try{
    await google.discoverAPI(DISCOVERY_URL)
    .then(client => {
      const analyzeRequest = {
        comment: {
          text: content,
        },
        requestedAttributes: {
          TOXICITY: {},
        },
      };

      client.comments.analyze(
          {
            key: API_KEY,
            resource: analyzeRequest,
          },
          (err, response) => {
            if (err) throw err;
            console.log(JSON.stringify(response.data, null, 2));
            score = response.data.attributeScores.TOXICITY.summaryScore.value
            console.log("Score: ", score)
            return res.status(201).json({ score });
          });
          
    })}
    catch(err) {
      return next(err);
    }
    
})

  


module.exports = router;