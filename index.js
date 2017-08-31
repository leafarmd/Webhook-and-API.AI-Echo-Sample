'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const restService = express();
process.env.DEBUG = 'actions-on-google:*';
const Assistant = require('actions-on-google').ApiAiAssistant;
restService.use(bodyParser.urlencoded({
    extended: true
}));

restService.use(bodyParser.json());

restService.post('/echo', function(req, res) {

  const assistant = new Assistant({ request: req, response: res });
  var message = assistant.getArgument('echoText');

  //assistant.ask(JSON.stringify(assistant);

  var song = "talk";
  var ubilab = "ubilab";
  //news sections
  var news = "news";
  var science = "science";
  var economy = "economy";
  var education = "education";
  var world = "world";
  var music = "music";
  var politics = "politics";
  var technology = "technology";
  //regions

  var sp = "sao paulo";
  var rj = "rio de janeiro";
  var rs = "rio grande do sul";

  // /**
  //    * asks for a permission to use the users location
  //    * @param assistant the assistant object passed in
  //    */
  //   function permissionChecker(assistant) {
  //       const permission = assistant.SupportedPermissions.DEVICE_PRECISE_LOCATION;
  //       assistant.askForPermission('To find the closest bus stop', permission);
  //   }
  //
  //   /**
  //    * called when the device gets a callback if they have permission or not
  //    * @param assistant the assistant object passed in
  //    */
  //   function gotPermission(assistant) {
  //       if (assistant.isPermissionGranted()) {
  //           assistant.ask(JSON.stringify(assistant.getContext("request_permission")));
  //
  //       } else {
  //           assistant.tell("I cannot find when the next bus is coming without your location.");
  //       }
  //   }
  //
  //   const actionMap = new Map();
  //   actionMap.set('request-location', permissionChecker);
  //   actionMap.set('find-location', gotPermission);
  //   assistant.handleRequest(actionMap);

    var speech = req.body.result && req.body.result.parameters && req.body.result.parameters.echoText ? req.body.result.parameters.echoText : "Seems like some problem. Speak again."

    // var txt = JSON.stringify(req.body);

    if(message.indexOf(ubilab) > -1) {
      sendResponse('<speak>Ubilab is a place for academic research which connects theoretical references with their practical application. The lab was created in the Graduate Program of Communications of the Pontifical Catholic University of Rio Grande do Sul (PUCRS) to create a multidisciplinary dialogue to research new perspectives of the Information Society.</speak>');
    }else

    if(speech.indexOf(song) > -1) {
      sendResponse('<speak> playing audio news <audio src="https://leafarmd.000webhostapp.com/news.mp3">didnt get your MP3 audio file</audio></speak>')
    }else


    //news sections

if(speech.indexOf(science) > -1) {
      var parser = require('rss-parser');
      parser.parseURL('http://g1.globo.com/dynamo/ciencia-e-saude/rss2.xml', function(err, parsed) {
        var speechNews = "";
        for(var i = 0; i < 4;i++){
        speechNews = speechNews + "\n" +   parsed.feed.entries[i].title;
        }
        return res.json({
            speech: speechNews,
            displayText: speech,
            source: 'webhook-echo-sample'
        });
      });
    }else
if(speech.indexOf(economy) > -1) {
      var parser = require('rss-parser');
      parser.parseURL('http://g1.globo.com/dynamo/economia/rss2.xml', function(err, parsed) {
        var speechNews = "";
        for(var i = 0; i < 4;i++){
        speechNews = speechNews + "\n" +   parsed.feed.entries[i].title;
        }
        return res.json({
            speech: speechNews,
            displayText: speech,
            source: 'webhook-echo-sample'
        });
      });
    }else

if(speech.indexOf(education) > -1) {
      var parser = require('rss-parser');
      parser.parseURL('http://g1.globo.com/dynamo/educacao/rss2.xml', function(err, parsed) {
        var speechNews = "";
        for(var i = 0; i < 4;i++){
        speechNews = speechNews + "\n" +   parsed.feed.entries[i].title;
        }
        return res.json({
            speech: speechNews,
            displayText: speech,
            source: 'webhook-echo-sample'
        });
      });
    }else

if(speech.indexOf(world) > -1) {
      var parser = require('rss-parser');
      parser.parseURL('http://g1.globo.com/dynamo/mundo/rss2.xml', function(err, parsed) {
        var speechNews = "";
        for(var i = 0; i < 4;i++){
        speechNews = speechNews + "\n" +   parsed.feed.entries[i].title;
        }
        return res.json({
            speech: speechNews,
            displayText: speech,
            source: 'webhook-echo-sample'
        });
      });
    }else

if(speech.indexOf(music) > -1) {
      var parser = require('rss-parser');
      parser.parseURL('http://g1.globo.com/dynamo/musica/rss2.xml', function(err, parsed) {
        var speechNews = "";
        for(var i = 0; i < 4;i++){
        speechNews = speechNews + "\n" +   parsed.feed.entries[i].title;
        }
        return res.json({
            speech: speechNews,
            displayText: speech,
            source: 'webhook-echo-sample'
        });
      });
    }else

if(speech.indexOf(science) > -1) {
      var parser = require('rss-parser');
      parser.parseURL('http://g1.globo.com/dynamo/ciencia-e-saude/rss2.xml', function(err, parsed) {
        var speechNews = "";
        for(var i = 0; i < 4;i++){
        speechNews = speechNews + "\n" +   parsed.feed.entries[i].title;
        }
        return res.json({
            speech: speechNews,
            displayText: speech,
            source: 'webhook-echo-sample'
        });
      });
    }else

if(speech.indexOf(politics) > -1) {
      var parser = require('rss-parser');
      parser.parseURL('http://g1.globo.com/dynamo/politica/mensalao/rss2.xml', function(err, parsed) {
        var speechNews = "";
        for(var i = 0; i < 4;i++){
        speechNews = speechNews + "\n" +   parsed.feed.entries[i].title;
        }
        return res.json({
            speech: speechNews,
            displayText: speech,
            source: 'webhook-echo-sample'
        });
      });
    }else

if(speech.indexOf(technology) > -1) {
      var parser = require('rss-parser');
      parser.parseURL('http://g1.globo.com/dynamo/tecnologia/rss2.xml', function(err, parsed) {
        var speechNews = "";
        for(var i = 0; i < 4;i++){
        speechNews = speechNews + "\n" +   parsed.feed.entries[i].title;
        }
        return res.json({
            speech: speechNews,
            displayText: speech,
            source: 'webhook-echo-sample'
        });
      });
    }else

//regions

if(speech.indexOf(sp) > -1) {
      var parser = require('rss-parser');
      parser.parseURL('http://g1.globo.com/dynamo/sao-paulo/rss2.xml', function(err, parsed) {
        var speechNews = "";
        for(var i = 0; i < 4;i++){
        speechNews = speechNews + "\n" +   parsed.feed.entries[i].title;
        }
        return res.json({
            speech: speechNews,
            displayText: speech,
            source: 'webhook-echo-sample'
        });
      });
    }else

if(speech.indexOf(rj) > -1) {
      var parser = require('rss-parser');
      parser.parseURL('http://g1.globo.com/dynamo/rio-de-janeiro/rss2.xml', function(err, parsed) {
        var speechNews = "";
        for(var i = 0; i < 4;i++){
        speechNews = speechNews + "\n" +   parsed.feed.entries[i].title;
        }
        return res.json({
            speech: speechNews,
            displayText: speech,
            source: 'webhook-echo-sample'
        });
      });
    }else

if(speech.indexOf(rs) > -1) {
      var parser = require('rss-parser');
      parser.parseURL('http://g1.globo.com/dynamo/rs/rio-grande-do-sul/rss2.xml', function(err, parsed) {
        var speechNews = "";
        for(var i = 0; i < 4;i++){
        speechNews = speechNews + "\n" +   parsed.feed.entries[i].title;
        }
        return res.json({
            speech: speechNews,
            displayText: speech,
            source: 'webhook-echo-sample'
        });
      });
    }else


    if(speech.indexOf(news) > -1) {
      var parser = require('rss-parser');
      parser.parseURL('http://g1.globo.com/dynamo/rss2.xml', function(err, parsed) {
        var speechNews = "";
        for(var i = 0; i < 4;i++){
        speechNews = parsed.feed.entries[i].title + ".\n" + speechNews;
        }
        sendResponse(speechNews);
      });
    }

    function sendResponse(msg) {
      assistant.ask(msg);
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
