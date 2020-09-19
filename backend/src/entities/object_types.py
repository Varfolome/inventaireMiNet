from sqlalchemy import Column
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.types import Integer, String, JSON


Base = declarative_base()


class ObjectTypes(Base):
    __tablename__ = "type"

    id = Column(
        Integer,
        primary_key=True
    )
    name_type = Column(
        'name',
        String(80)
    )
    params = Column(
        JSON,
        nullable=True
    )
