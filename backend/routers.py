from typing import Annotated

from fastapi import APIRouter, Depends, HTTPException, status
from passlib.context import CryptContext
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm

from database import VacancyOrm
from repository import VacancyRepo
from models import VacancySchema, VacancySchemaAdd

from parsing import get_vacancies

router = APIRouter()

@router.get("/parser", tags=["parser"])
async def get_name_and_salary()
    
    #все схемы модели надо будет переделывать в итоге

print(get_vacancies('стажер', 30000))
