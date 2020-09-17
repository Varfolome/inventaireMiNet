from sqlalchemy import Column, ForeignKey, create_engine, MetaData, Table
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.types import Integer, Boolean, String, JSON


Base_type = declarative_base()


class ObjectTypes(Base_type):
    __tablename__ = "type"

    id = Column(
        Integer,
        primary_key=True
    )
    available = Column(
        String
    )

    def __repr__(self):
        return '<Type model {}>'.format(self.id)