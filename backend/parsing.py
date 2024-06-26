from bs4 import BeautifulSoup
import requests

url = "https://hh.ru/"
response = requests.get(url)
soup = BeautifulSoup(response.text, 'lxml')
links = soup.select('.link')
for link in links:
    print(link.get('href'))

title = soup.title
print(title)
