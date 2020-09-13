from sqlalchemy import Column
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.types import Integer, String

Base_mrq = declarative_base()


class Marques(Base_mrq):
    __tablename__ = "marques"

    id = Column(
        Integer,
        primary_key=True,
        autoincrement=True,
        nullable=False
    )
    name = Column(
        String(80),
        nullable=False
    )
