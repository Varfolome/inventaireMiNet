from sqlalchemy import Column
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.types import Integer, String

Base = declarative_base()


class Brand(Base):
    __tablename__ = "brands"

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
