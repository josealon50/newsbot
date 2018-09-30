import requests
import json
class News :
    def __init__(self, token) :
        self.URL = "https://newsapi.org/v2/"
        self.token = token

    def topNewsHeadlines(self):
        PARAMS = { 'country' : 'us', 'apiKey' : self.token, 'category' : 'general'}
        r = requests.get(url=self.URL + 'top-headlines', params=PARAMS)
        news = r.json()
        return news

    def formatNews(jsonNews) :
        formatNews = []
        for new in jsonNews :
            formatNews['source'] = new.source.name
            formatNews['author'] = new.author
            formatNews['title'] = new.title
            formatNews['description'] = new.description

        return formatNews

