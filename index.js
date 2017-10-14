'use strict';

const express = require('express');
const bodyParser = require('body-parser');
var pos = 0;
var lastMessage = "";
var newsArray = {"","","","",""};
const restService = express();
process.env.DEBUG = 'actions-on-google:*';
const Assistant = require('actions-on-google').ApiAiAssistant;
restService.use(bodyParser.urlencoded({
    extended: true
}));

restService.use(bodyParser.json());

restService.post('/echo', function(req, res) {

  const assistant = new Assistant({ request: req, response: res });
  var message = assistant.getArgument('echoText').toLowerCase();
  var tittle="";
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
  var sports = "sports";
  var headLines = "headlines";

  //commands
  var next = "next";
  var repeat = "repeat";

  //regions
  var sp = "sao paulo";
  var rj = "rio de janeiro";
  var rs = "rio grande do sul";


  if(message.indexOf("location") > -1) {
    let preciseLocationPermission = assistant.SupportedPermissions.DEVICE_PRECISE_LOCATION;
    assistant.askForPermissions('To address you by name and know your location',[preciseLocationPermission]);
    assistant.sendResponse(assistant.getDeviceLocation().coordinates.latitude);
  }else

    if(message.indexOf("next") > -1) {
      pos++;
      assistant.ask(""+pos);
    }else

    if(message.indexOf(ubilab) > -1) {
      sendResponse("Ubilab is a place for academic research which connects theoretical references with their practical application. The lab was created in the Graduate Program of Communications of the Pontifical Catholic University of Rio Grande do Sul (PUCRS) to create a multidisciplinary dialogue to research new perspectives of the Information Society.");
    }else

    if(message.indexOf(headlines) > -1) {
      sendResponse('<speak> playing headlines <audio src="https://leafarmd.000webhostapp.com/news2.mp3"></audio></speak>')
    }else

    //news sections

    if(message.indexOf(science) > -1) {
      title = "News from science";
      parseFromRSS('http://g1.globo.com/dynamo/ciencia-e-saude/rss2.xml');
    }else

    if(message.indexOf(economy) > -1) {
      title = "News from economy";
      parseFromRSS('http://g1.globo.com/dynamo/economia/rss2.xml');
    }else

    if(message.indexOf(education) > -1) {
      title = "News from education";
      parseFromRSS('http://g1.globo.com/dynamo/educacao/rss2.xml');
    }else

    if(message.indexOf(music) > -1) {
      title = "News from music";
      parseFromRSS('http://g1.globo.com/dynamo/musica/rss2.xml');
    }else

    if(message.indexOf(politics) > -1) {
      title = "News from politics";
      parseFromRSS('http://g1.globo.com/dynamo/politica/mensalao/rss2.xml');
    }else

    if(message.indexOf(technology) > -1) {
      title = "News from technology";
      parseFromRSS('http://g1.globo.com/dynamo/tecnologia/rss2.xml');
    }else

    if(message.indexOf(sports) > -1) {
      title = "News from sports"
      parseFromRSS('http://globoesporte.globo.com/servico/semantica/editorias/plantao/feed.rss');
    }else

    if(message.indexOf(sp) > -1) {
      title = "News from Sao Paulo";
      parseFromRSS('http://g1.globo.com/dynamo/sao-paulo/rss2.xml');
    }else

    if(message.indexOf(rj) > -1) {
      title = "News from Rio de Janeiro";
      parseFromRSS('http://g1.globo.com/dynamo/rio-de-janeiro/rss2.xml');
    }else

    if(message.indexOf(rs) > -1) {
      title = "News from Rio Grande do Sul";
      parseFromRSS('http://g1.globo.com/dynamo/rs/rio-grande-do-sul/rss2.xml');
    }else

    if(message.indexOf(news) > -1) {
      title = "these are the general news";
      parseFromRSS('http://g1.globo.com/dynamo/rss2.xml');
    }else{
      sendResponse("<speak>sorry, i can't help you with that, but you can ask me the news or about sports.</speak>");
    }


    function parseFromRSS(url){
      var parser = require('rss-parser');
      parser.parseURL(url, function(err, parsed) {
        var speechNews = "";
        for(var i = 0; i < 4;i++){
        speechNews = parsed.feed.entries[i].title + ".\n" + speechNews;
        }
        sendResponse("<speak>" + title + " " + speechNews + "</speak>");
      });
    }

    function sendResponse(msg) {
      assistant.ask(msg);
    }

});

restService.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});
