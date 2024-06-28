from sqlalchemy import select

from database import VacancyOrm, new_session
from models import VacancySchemaAdd, VacancySchema

class VacancyRepo:
    @classmethod
    async def add_one(cls, vacancy_data: VacancySchemaAdd) -> int:
        async with new_session() as session:
            vacancy_dict = vacancy_data.model_dump()

            vacancy = VacancyOrm(**vacancy_dict)
            session.add(vacancy)
            await session.flush()
            await session.commit()
            return vacancy.id
    
    @classmethod
    async def find_all(cls) -> list[VacancySchema]:
        async with new_session() as session:
            query = select(VacancyOrm)
            result = await session.execute(query)
            vacancy_models = result.scalas().all()
            vacancy_schemas = [VacancySchema.model_validate(vacancy_model) for vacancy_model in vacancy_models]
            return vacancy_schemas
