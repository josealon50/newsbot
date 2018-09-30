# Work with Python 3.6
import discord
import json
from news import News

with open('../auth.json') as f:
    TOKENS = json.load(f)

client = discord.Client()

@client.event
async def on_message(message):
    # we do not want the bot to reply to itself
    if message.author == client.user:
        return

    if message.content.startswith('!hello'):
        msg = 'Hello {0.author.mention}'.format(message)
        await client.send_message(message.channel, msg)

    if message.content.startswith('!top-headlines'):
        x = News(TOKENS['news_api_token'])
        data=x.topNewsHeadlines()
        print(data)


@client.event
async def on_ready():
    print('Logged in as')
    print(client.user.name)
    print(client.user.id)
    print('------')

client.run(TOKENS['discord_token'])
