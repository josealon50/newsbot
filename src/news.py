import requests
class News :
    def __init__(self, token) :
        self.URL = "https://newsapi.org/v2/"
        self.token = token

    def topNewsHeadlines(self):
        PARAMS = { 'country' : 'us', 'apiKey' : self.token }
        r = requests.get(url=self.URL + 'top-headlines', params=PARAMS)
        print(r.json())
        return data

