from database import Base

from sqlalchemy.orm import Mapped, mapped_column

class Vacancy(Base):
    __tablename__ = "Vacancies"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    name: Mapped[str]
    salary: Mapped[int]
    experience: Mapped[str]
    city: Mapped[str]
    link: Mapped[str]
