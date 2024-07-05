from typing import Annotated
from fastapi import APIRouter, Depends
from pydantic import BaseModel
from requests import Session

from models import Vacancy
from parsing import get_vacancies
from database import new_session
import models as models

router = APIRouter(prefix='/vacancies')


#Models for connection#

class VacancyBase(BaseModel):
    name: str
    salary: int
    experience: str
    city: str
    link: str

class VacancyModel(VacancyBase):
    id: int
    
    class Config:
        orm_mode = True


def get_db():
    db = new_session()
    try:
        yield db
    finally:
        db.close()


db_dependency = Annotated[Session, Depends(get_db)]

@router.post("", tags=["vacancies"])
async def get_parse_params(name:str, salary:int, db:db_dependency):
    all_found_vacancies = get_vacancies(name, salary)
    for vac in all_found_vacancies:
        dict_example=['name', 'salary', 'experience', 'city', 'link']
        vac = dict(zip(dict_example, vac))
        db_vacancy = models.Vacancy(**vac)
        db.add(db_vacancy)
        db.commit()
        db.refresh(db_vacancy)
    return {'ok': True}

@router.get
