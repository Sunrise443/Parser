from fastapi import FastAPI, HTTPException, Depends
from typing import Annotated, List
from sqlalchemy.orm import Session
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

from database import SessionLocal, engine
import models as models
from parsing import get_vacancies

app = FastAPI()

origins = ['http://localhost:3000']

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
)

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
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


db_dependency = Annotated[Session, Depends(get_db)]

models.Base.metadata.create_all(bind=engine)


@app.post("/vacancies/", response_model=VacancyModel)
async def parse_vacancies(vacancy: VacancyBase, db: db_dependency):
    db_vacancy = models.Vacancy(**vacancy.dict())
    db.add(db_vacancy)
    db.commit()
    db.refresh(db_vacancy)
    return db_vacancy



@app.get("/vacancies/", response_model=List[VacancyModel])
async def read_vacancy(db: db_dependency, skip: int=0, limit: int=100):
    vacancies = db.query(models.Vacancy).offset(skip).limit(limit).all()
    return vacancies
