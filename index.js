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
    var speech = req.body.result && req.body.result.parameters && req.body.result.parameters.echoText ? req.body.result.parameters.echoText : "Seems like some problem. Speak again."
    if(speech.contains(news)){
      return res.json({

          speech: 'ola',
          displayText: speech,
          source: 'webhook-echo-sample'
      });
    }
    var parser = require('rss-parser');

    parser.parseURL('http://pox.globo.com/rss/g1/brasil/', function(err, parsed) {
      console.log(parsed.feed.title);
      speech = parsed.feed.title;
      parsed.feed.entries.forEach(function(entry) {
        console.log(entry.title + ':' + entry.link);
        speech = entry.title;
        return res.json({

            speech: '<speak> heres a song to you <audio src="https://allthingsaudio.wikispaces.com/file/view/Shuffle%20for%20K.M.mp3/139190697/Shuffle%20for%20K.M.mp3">didnt get your MP3 audio file</audio></speak>',
            displayText: speech,
            source: 'webhook-echo-sample'
        });

      })


    })


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
