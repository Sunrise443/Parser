from typing import Annotated

from fastapi import APIRouter, Depends

from database import VacancyOrm
from repository import VacancyRepo
from models import VacancySchema, VacancySchemaAdd

router = APIRouter()

@router.get("/hh/vacancies", tags=["vacancies"])
async def get_vacancy() -> list[VacancySchema]:
    vacancies = await VacancyRepo.find_all()
    return vacancies
