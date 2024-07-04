from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
import time

def get_vacancies(vac_name, vac_salary):
    vac_experience = "between1And3"

    url = f"https://hh.ru/search/vacancy?text={vac_name}&salary={vac_salary}&experience={vac_experience}&items_on_page=50"

    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))

    driver.get(url)

    soup = BeautifulSoup(driver.page_source, features='lxml')

    vacancies = soup.find_all(name='div', attrs={'class': "vacancy-card--z_UXteNo7bRGzxWVcL7y font-inter"})

    all_vacancies = list()

    for vacancy in vacancies:
        vacancy_name = vacancy.find(name='span', attrs={'class':'vacancy-name--c1Lay3KouCl7XasYakLk serp-item__title-link'}).getText()
        vacancy_experience = vacancy.find(name='span', attrs={'class':'label--rWRLMsbliNlu_OMkM_D3 label_light-gray--naceJW1Byb6XTGCkZtUM'}).getText()
        vacancy_city = vacancy.find(name='span', attrs={'data-qa':"vacancy-serp__vacancy-address", 'class':'bloko-text'}).getText()
        vacancy_link = vacancy.find(name='a', attrs={'class':'bloko-link'}).get('href')
        all_vacancies.append([vacancy_name, vacancy_experience, vacancy_city, vacancy_link])

    time.sleep(10)
    driver.quit()

    return all_vacancies
