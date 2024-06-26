from turtle import heading
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
import time

name = str(input("What you're searching for: "))
url = "https://hh.ru/search/vacancy?text={name}"

driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))

driver.get(url)

soup = BeautifulSoup(driver.page_source, features='lxml')

headings = soup.find_all(name='span', attrs={'class': "vacancy-name--c1Lay3KouCl7XasYakLk serp-item__title-link"})

for heading in headings:
    print(heading.getText())

time.sleep(500)

driver.quit()
