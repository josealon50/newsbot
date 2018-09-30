var auth = require('./auth.json');
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(auth.news_api_token);
var xhttp = new XMLHttpRequest();

function getRequest( url, method,  header ){
    try{
        var xhttp = new XMLHttpRequest();
        
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {

            }
        };
        xhttp.open(method, url, true);
        xhttp.send();
    }
    catch(err){

    }
}

function getTopHeadlines(){
    try{ 
       newsapi.v2.topHeadlines({
          sources: 'bbc-news,the-verge',
          q: 'bitcoin',
          language: 'en',
          country: 'us'
        }).then(response => {
            console.log(response);

        }); 
    }
    catch(err){


    }

}

//TODO: move all functionality to its on js file 
function getTechnologyHeadlines(){
    try{ 
        newsapi.v2.sources({
          category: 'technology',
          language: 'en',
          country: 'us'
        }).then(response => {
          console.log(response);
          /*
            {
              status: "ok",
              sources: [...]
            }
          */
        });
    }
    catch(err){

    }

}
