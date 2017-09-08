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

  return res.json({
      speech: 'teste',
      displayText: speech,
      source: 'webhook-echo-sample'
  });

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


    if(message.indexOf(ubilab) > -1) {
      sendResponse('<speak>Ubilab is a place for academic research which connects theoretical references with their practical application. The lab was created in the Graduate Program of Communications of the Pontifical Catholic University of Rio Grande do Sul (PUCRS) to create a multidisciplinary dialogue to research new perspectives of the Information Society.</speak>');
    }else

    if(message.indexOf(song) > -1) {
      sendResponse('<speak> playing audio news <audio src="https://leafarmd.000webhostapp.com/news.mp3">didnt get your MP3 audio file</audio></speak>')
    }else


    //news sections

    if(message.indexOf(science) > -1) {
      parseFromRSS('http://g1.globo.com/dynamo/ciencia-e-saude/rss2.xml');
    }else

    if(message.indexOf(economy) > -1) {
      parseFromRSS('http://g1.globo.com/dynamo/economia/rss2.xml');
    }else

    if(message.indexOf(education) > -1) {
      parseFromRSS('http://g1.globo.com/dynamo/educacao/rss2.xml');
    }else

    if(message.indexOf(education) > -1) {
      parseFromRSS('http://g1.globo.com/dynamo/mundo/rss2.xml');
    }else

    if(message.indexOf(music) > -1) {
      parseFromRSS('http://g1.globo.com/dynamo/musica/rss2.xml');
    }else

    if(message.indexOf(science) > -1) {
      parseFromRSS('http://g1.globo.com/dynamo/ciencia-e-saude/rss2.xml');
    }else

    if(message.indexOf(politics) > -1) {
      parseFromRSS('http://g1.globo.com/dynamo/politica/mensalao/rss2.xml');
    }else

    if(message.indexOf(technology) > -1) {
      parseFromRSS('http://g1.globo.com/dynamo/tecnologia/rss2.xml');
    }else

    if(message.indexOf(sp) > -1) {
      parseFromRSS('http://g1.globo.com/dynamo/sao-paulo/rss2.xml');
    }else

    if(message.indexOf(rj) > -1) {
      parseFromRSS('http://g1.globo.com/dynamo/rio-de-janeiro/rss2.xml');
    }else

    if(message.indexOf(rs) > -1) {
      parseFromRSS('http://g1.globo.com/dynamo/rs/rio-grande-do-sul/rss2.xml');
    }else

    if(message.indexOf(news) > -1) {
      parseFromRSS('http://g1.globo.com/dynamo/rss2.xml');
    }


    function parseFromRSS(url){
      var parser = require('rss-parser');
      parser.parseURL(url, function(err, parsed) {
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

restService.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});
