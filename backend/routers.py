from typing import Annotated, List
from fastapi import APIRouter, Depends
from pydantic import BaseModel
from requests import Session
from sqlalchemy import select

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
        from_attributes = True


def get_db():
    db = new_session()
    try:
        yield db
    finally:
        db.close()


db_dependency = Annotated[Session, Depends(get_db)]

@router.post("", tags=["vacancies"], response_model=str)
async def get_parse_params(name:str, salary:int, db:db_dependency):
    all_found_vacancies = get_vacancies(name, salary)
    for vac in all_found_vacancies:
        dict_example=['name', 'salary', 'experience', 'city', 'link']
        vac = dict(zip(dict_example, vac))
        db_vacancy = models.Vacancy(**vac)
        db.add(db_vacancy)
        await db.commit()
    return "Data is loaded"

@router.get("", tags=["vacancies"], response_model=List[VacancyModel])
async def show_vacancies(db:db_dependency):
    vacancies = await db.execute(select(models.Vacancy))
    return vacancies.scalars().all()
