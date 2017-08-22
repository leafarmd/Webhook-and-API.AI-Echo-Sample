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
    var txt = JSON.stringify(req.body.result.originalRequest);
    return res.json({
        speech: txt,
        displayText: speech,
        source: 'webhook-echo-sample'
    });

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


    if(speech.indexOf(news) > -1) {
      var parser = require('rss-parser');
      parser.parseURL('http://rss.cnn.com/rss/edition.rss', function(err, parsed) {
        var speechNews = "";
        for(var i = 0; i < 4;i++){
        speechNews = speechNews + "\n" +   parsed.feed.entries[i].title;
        }
        return res.json({
            speech: speech,
            displayText: speech,
            source: 'webhook-echo-sample'
        });
      });
    }


});

restService.post('/slack-test', function(req, res) {

    var slack_message = {
        "text": "Details of JIRA board for Browse and Commerce",
        "attachments": [{
            "title": "JIRA Board",
            "title_link": "http://www.google.com",
            "color": "#36a64f",

            "fields": [{
                "title": "Epic Count",
                "value": "50",
                "short": "false"
            }, {
                "title": "Story Count",
                "value": "40",
                "short": "false"
            }],

            "thumb_url": "https://stiltsoft.com/blog/wp-content/uploads/2016/01/5.jira_.png"
        }, {
            "title": "Story status count",
            "title_link": "http://www.google.com",
            "color": "#f49e42",

            "fields": [{
                "title": "Not started",
                "value": "50",
                "short": "false"
            }, {
                "title": "Development",
                "value": "40",
                "short": "false"
            }, {
                "title": "Development",
                "value": "40",
                "short": "false"
            }, {
                "title": "Development",
                "value": "40",
                "short": "false"
            }]
        }]
    }
    return res.json({
        speech: "speech",
        displayText: "speech",
        source: 'webhook-echo-sample',
        data: {
            "slack": slack_message
        }
    });
});




restService.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});
