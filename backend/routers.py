from typing import Annotated, List
from fastapi import APIRouter, Depends
from pydantic import BaseModel
from requests import Session
from sqlalchemy import select

from parsing import get_vacancies
from database import create_tables, new_session, delete_tables
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

#Models for connection#

def get_db():
    db = new_session()
    try:
        yield db
    finally:
        db.close()


db_dependency = Annotated[Session, Depends(get_db)]

@router.get("", tags=["vacancies"], response_model=List[VacancyModel])
async def get_parsed_params(name:str, salary:int, experience:str, db:db_dependency):
    all_found_vacancies = get_vacancies(name, salary, experience)
    for vac in all_found_vacancies:
        dict_example=['name', 'salary', 'experience', 'city', 'link']
        vac = dict(zip(dict_example, vac))
        db_vacancy = models.Vacancy(**vac)
        db.add(db_vacancy)
        await db.commit()
    vacancies = await db.execute(select(models.Vacancy))
    await delete_tables()
    await create_tables()
    return vacancies.scalars().all()
