from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column

engine = create_async_engine("sqlite+aiosqlite:///backend/parsed_data.db")
new_session = async_sessionmaker(engine, expire_on_commit=False)

class Model(DeclarativeBase):
    pass

class VacancyOrm(Model):
    __tablename__ = "vacancies"

    id: Mapped[int] = mapped_column(primary_key=True)
    vacancy_name: Mapped[str]
    vacancy_salary: Mapped[str]
    vacancy_expiriens: Mapped[str]
    vacancy_place: Mapped[str]
    vacancy_link: Mapped[str]

async def create_tables():
    async with engine.begin() as conn:
        await conn.run_sync(Model.metadata.drop_all)

async def delete_tables():
    async with engine.begin() as conn:
        await conn.run_sync(Model.metadata.drop_all)
