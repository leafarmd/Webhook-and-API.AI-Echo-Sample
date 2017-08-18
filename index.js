'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const restService = express();

restService.use(bodyParser.urlencoded({
    extended: true
}));

restService.use(bodyParser.json());

restService.post('/echo', function(req, res) {
  var news = "news";
  var song = "song";
  var ubilab = "ubilab";
    var speech = req.body.result && req.body.result.parameters && req.body.result.parameters.echoText ? req.body.result.parameters.echoText : "Seems like some problem. Speak again."

    if(speech.indexOf(ubilab) > -1) {
      return res.json({

          speech: 'Ubilab is a place for academic research which connects theoretical references with their practical application. The lab was created in the Graduate Program of Communications of the Pontifical Catholic University of Rio Grande do Sul (PUCRS) to create a multidisciplinary dialogue to research new perspectives of the Information Society.',
          displayText: speech,
          source: 'webhook-echo-sample'
      });
    }

    if(speech.indexOf(song) > -1) {
      return res.json({

          speech: '<speak> here\'s a song to you <audio src="https://allthingsaudio.wikispaces.com/file/view/Shuffle%20for%20K.M.mp3/139190697/Shuffle%20for%20K.M.mp3">didnt get your MP3 audio file</audio></speak>',
          displayText: speech,
          source: 'webhook-echo-sample'
      });
    }

    var parser = require('rss-parser');

    parser.parseURL('http://rss.cnn.com/rss/edition.rss', function(err, parsed) {
      speech = parsed.feed.title;
      parsed.feed.entries.forEach(function(entry) {
        speech = entry.title;
        return res.json({
            speech: speech,
            displayText: speech,
            source: 'webhook-echo-sample'
        });

      });


    });


});
