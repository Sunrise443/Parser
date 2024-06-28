from pydantic import BaseModel, ConfigDict, Field

class VacancySchemaAdd(BaseModel):
    vacancy_name: str
    vacancy_salary: str
    vacancy_expiriens: str
    vacancy_place: str
    vacancy_link: str

class VacancySchema(VacancySchemaAdd):
    id: int

    model_config = ConfigDict(from_attributes=True)
